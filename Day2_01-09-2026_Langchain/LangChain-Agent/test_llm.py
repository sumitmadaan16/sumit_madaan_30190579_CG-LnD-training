from llm_config import chat_model

res = chat_model.invoke(
    "generate  5 test cases for an e-commerce login"
)

print(res)
print(res.content)