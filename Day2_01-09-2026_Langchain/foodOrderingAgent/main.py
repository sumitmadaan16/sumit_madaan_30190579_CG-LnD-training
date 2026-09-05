from requirement_analysis_agent import requirement_prompt
from test_case_agent import test_case_prompt
from bug_analysis_agent import bug_analysis_prompt
from bug_failure_report_agent import failure_report_prompt


requirement = """

A customer should be able to log in to a food delivery application, search for a restaurant, add food items to the cart, apply a coupon, select a delivery address, make payment, and place the order.

The application supports UPI, credit/debit cards, and Cash on Delivery. A coupon SAVE20 gives 20% off on orders above ₹500, with a maximum discount of ₹150.

If payment fails, the order should not be created. If payment succeeds, the customer should receive an order confirmation with an order ID.
"""


# ==========================================
# AGENT 1 - REQUIREMENT ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 70)

analysis_response = requirement_prompt.invoke({
    "requirement": requirement
})

analysis = analysis_response.content

print(analysis)


# ==========================================
# AGENT 2 - TEST CASE GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 2 - TEST CASE GENERATION")
print("=" * 70)

test_case_response = test_case_prompt.invoke({
    "requirement": requirement,
    "analysis": analysis
})

test_cases = test_case_response.content

print(test_cases)


# ==========================================
# AGENT 3 - BUG ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 3 - BUG ANALYSIS")
print("=" * 70)

bug_analysis_response = bug_analysis_prompt.invoke({
    "requirement": requirement,
    "analysis": analysis
})

bug_analysis = bug_analysis_response.content

print(bug_analysis)


# ==========================================
# AGENT 4 - BUG FAILURE REPORT
# ==========================================

print("\n" + "=" * 70)
print("AGENT 4 - BUG FAILURE REPORT")
print("=" * 70)

bug_report_response = failure_report_prompt.invoke({
    "requirement": requirement,
    "analysis": analysis,
    "bug_analysis": bug_analysis
})

bug_report = bug_report_response.content

print(bug_report)


# ==========================================
# FINAL SUMMARY
# ==========================================

print("\n" + "=" * 70)
print("PIPELINE EXECUTION COMPLETED")
print("=" * 70)

print("\nRequirement Analysis:")
print(analysis)

print("\nTest Cases:")
print(test_cases)

print("\nBug Analysis:")
print(bug_analysis)

print("\nBug Failure Report:")
print(bug_report)