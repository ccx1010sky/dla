import numpy as np


def handler(event,context):
    arr = np.random.randint(0,10,(3,3))
    return {
        "statusCode":200,
        "body": {"message": "hello world!", "array": arr.tolist()}
    }