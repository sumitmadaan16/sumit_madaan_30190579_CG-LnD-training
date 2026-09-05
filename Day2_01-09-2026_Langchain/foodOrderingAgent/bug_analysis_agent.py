from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model


bug_analysis_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a Senior QA Bug Analysis Agent.

Analyze the given requirement and identify potential defects, failure-prone areas, business risks, and likely bug scenarios.

Requirement:
{requirement}

Tasks:
1. Identify modules involved in the workflow.
2. Identify potential bug-prone areas.
3. Analyze business rules for possible failures.
4. Identify validation gaps.
5. Identify integration risks.
6. Identify possible edge-case failures.
7. Identify security and data consistency risks.
8. Predict high-risk defects that may occur during implementation.
9. Suggest areas requiring thorough testing.
10. Highlight critical business impacts if failures occur.

Output Format:

Requirement Summary:
<summary>

Modules:
- Module 1
- Module 2

Potential Defects:
- BUG-001
- BUG-002

Validation Risks:
- VR-001
- VR-002

Business Rule Risks:
- BR-001
- BR-002

Edge Case Failures:
- EC-001
- EC-002

Integration Risks:
- IR-001
- IR-002

High-Risk Areas:
- Area 1
- Area 2

Business Impact:
- Impact 1
- Impact 2

Testing Recommendations:
- Recommendation 1
- Recommendation 2

Important:
- Focus on potential failures, not test cases.
- Consider cart, coupon, address, payment, order creation, and order confirmation modules.
- Verify discount calculations, payment handling, boundary conditions, and order creation logic.
- Highlight scenarios that could cause revenue loss, incorrect discounts, duplicate orders, failed payments, or poor user experience.
"""
    )
])

test_case_chain = bug_analysis_prompt | chat_model