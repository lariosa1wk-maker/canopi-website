#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class CanopiAPITester:
    def __init__(self, base_url="https://growth-forecast-12.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, status, details=""):
        """Log test result"""
        result = {
            "test_name": name,
            "status": status,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported HTTP method: {method}")

            success = response.status_code == expected_status
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                    self.log_test(name, "PASSED", f"Status: {response.status_code}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text}")
                    self.log_test(name, "PASSED", f"Status: {response.status_code}")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                self.log_test(name, "FAILED", f"Expected {expected_status}, got {response.status_code}. Response: {response.text}")
                return False, {}

        except requests.exceptions.Timeout:
            error_msg = f"Request timeout after 10 seconds"
            print(f"❌ Failed - {error_msg}")
            self.log_test(name, "FAILED", error_msg)
            return False, {}
        except requests.exceptions.ConnectionError:
            error_msg = f"Connection error - unable to reach server"
            print(f"❌ Failed - {error_msg}")
            self.log_test(name, "FAILED", error_msg)
            return False, {}
        except Exception as e:
            error_msg = f"Error: {str(e)}"
            print(f"❌ Failed - {error_msg}")
            self.log_test(name, "FAILED", error_msg)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )
        return success

    def test_waitlist_join(self, email):
        """Test joining waitlist"""
        success, response = self.run_test(
            "Join Waitlist",
            "POST",
            "api/waitlist",
            200,
            data={"email": email}
        )
        return success, response

    def test_waitlist_get(self):
        """Test getting waitlist entries"""
        success, response = self.run_test(
            "Get Waitlist",
            "GET", 
            "api/waitlist",
            200
        )
        return success, response

    def test_status_create(self, client_name):
        """Test creating status check"""
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data={"client_name": client_name}
        )
        return success, response

    def test_status_get(self):
        """Test getting status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status", 
            200
        )
        return success, response

    def print_summary(self):
        """Print test summary"""
        print(f"\n" + "="*50)
        print(f"📊 TEST SUMMARY")
        print(f"="*50)
        print(f"Tests run: {self.tests_run}")
        print(f"Tests passed: {self.tests_passed}")
        print(f"Tests failed: {self.tests_run - self.tests_passed}")
        print(f"Success rate: {(self.tests_passed / self.tests_run * 100):.1f}%" if self.tests_run > 0 else "N/A")
        
        if self.tests_run - self.tests_passed > 0:
            print(f"\n❌ Failed tests:")
            for result in self.test_results:
                if result["status"] == "FAILED":
                    print(f"   - {result['test_name']}: {result['details']}")
        
        return self.tests_passed == self.tests_run

def main():
    print("🚀 Starting Canopi API Testing...")
    tester = CanopiAPITester()
    
    # Test API availability and basic endpoints
    print("\n" + "="*50)
    print("TESTING API AVAILABILITY")
    print("="*50)
    
    if not tester.test_api_root():
        print("❌ API root is not accessible - stopping tests")
        tester.print_summary()
        return 1
    
    # Test waitlist functionality
    print("\n" + "="*50) 
    print("TESTING WAITLIST FUNCTIONALITY")
    print("="*50)
    
    test_email = f"test_{datetime.now().strftime('%H%M%S')}@canopi.test"
    success, waitlist_entry = tester.test_waitlist_join(test_email)
    
    if success:
        print(f"✅ Successfully joined waitlist with email: {test_email}")
        
        # Test getting waitlist entries
        success, waitlist_data = tester.test_waitlist_get()
        if success and waitlist_data:
            print(f"✅ Waitlist contains {len(waitlist_data)} entries")
    else:
        print("❌ Failed to join waitlist")
    
    # Test status check functionality (optional)
    print("\n" + "="*50)
    print("TESTING STATUS CHECK FUNCTIONALITY") 
    print("="*50)
    
    test_client = f"test_client_{datetime.now().strftime('%H%M%S')}"
    tester.test_status_create(test_client)
    tester.test_status_get()
    
    # Print final results
    all_passed = tester.print_summary()
    return 0 if all_passed else 1

if __name__ == "__main__":
    exit_code = main()
    print(f"\n🏁 Testing complete with exit code: {exit_code}")
    sys.exit(exit_code)