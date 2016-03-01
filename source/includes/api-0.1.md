# Open API (v0.1)

## Bill


### Get all bills

```shell
curl "http://api.popong.com/v0.1/bill/?api_key=test"
```

```python
import requests
request.get("http://api.popong.com/v0.1/bill/?api_key=test")
```

> Example response:

```json
{
    "items": [
        {
            "status": "폐기",
            "proposed_date": "2012-06-26",
            "name": "고용정책 기본법 일부개정법률안",
            "assembly_id": 19,
            "status_id": 8,
            "summary": "제안이유 및 주요내용 현행법 제7조제1항에서 ... 보장하고자 함(안 제41조제1항 신설).",
            "sponsor": "이명수의원 등 10인",
            "status_ids": [ 1, 2, 8 ],
            "document_url": "http://likms.assembly.go.kr/filegate/servlet/FileGate?bookId=787430CC-1342-113A-8AE6-9F243D90C0B3&type=1",
            "decision_date": "2013-02-18",
            "link_id": "PRC_P1K2Z0L6A2U6V1P6N0C0R3L3E3N5T6",
            "id": "1900326",
            "is_processed": true
        },
        ...
    ],
    "kind": "gov#bills",
    "next_page": 2
}
```

This endpoint retrieves all bills.

#### HTTP Request

`Get http://api.popong.com/v0.1/bill/`

#### Query Parameters

Parameter | Required | Description
--------- | -------- | -----------
api_key | true | Input API key.

### Get a specific bill

### Search bills

## Person

## Party
