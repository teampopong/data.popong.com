# Open API (v0.1)

## Bill

### Get all bills

```shell
curl "http://api.popong.com/v0.1/bill/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/bill/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/bill/`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

<aside class="success">
<code>api_key</code> 포함시키는 것, 잊지 않으셨죠?
</aside>

#### Return Values

> The above command returns JSON structured like this:

```json
{
    "items": [
        {
            "status": "폐기",
            "is_processed": true,
            "status_id": 8,
            "link_id": "PRC_P1K2Z0L6A2U6V1P6N0C0R3L3E3N5T6",
            "status_ids": [ 1, 2, 8 ],
            "sponsor": "이명수의원 등 10인",
            "decision_date": "2013-02-18",
            "id": "1900326",
            "proposed_date": "2012-06-26",
            "name": "고용정책 기본법 일부개정법률안",
            "assembly_id": 19,
            "summary": "제안이유 및 주요내용 현행법 제7조제1항에서 ... 보장하고자 함(안 제41조제1항 신설).",
            "document_url": "http://likms.assembly.go.kr/filegate/servlet/FileGate?bookId=787430CC-1342-113A-8AE6-9F243D90C0B3&type=1"
        },
        ...
    ],
    "kind": "popong#bills",
    "next_page": 2
}
```

Key | Description
--- | -----------
status | Current status of the bill.
is_processed | Whether the bill is processed (처리) or not processed (계류).
status_id | Current status ID of the bill. The list of status IDs can be found [here](https://github.com/teampopong/codebooks/#의안상태코드-bill-status-codes).
link_id | The unique ID of the bill used in the National Assembly website. For example: `http://likms.assembly.go.kr/bill/jsp/BillDetail.jsp?bill_id=<link_id>`
status_ids | The list of statuses the bill goes through. The list of status IDs can be found [here](https://github.com/teampopong/codebooks/#의안상태코드-bill-status-codes).
sponsor | The sponsor and the total number of cosponsors.
decision_date | The final decision of the bill. Value should be `null` if the bill is still processing.
id | Bill's unique ID, provided by the national assembly. You can also see the bill's info at: `http://pokr.kr/bill/<id>`.
proposed_date | The proposed date of the bill.
name | Title of the bill.
assembly_id | The assembly the bill was proposed.
summary | The summary of the bill. Can be `null`.
document_url | URL of the bill's proposal PDF. Can be `null`.


### Search bills

```shell
curl "http://api.popong.com/v0.1/bill/search?q=데이터&s=김영환&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/bill/search?q=데이터&s=김영환&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/bill/search`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
q | string | false | LIKE search for value in the `name` field.
s | string | false | LIKE search for value in the `sponsor` field.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

Same structure as above.


### Get a specific bill

```shell
curl "http://api.popong.com/v0.1/bill/152445?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/bill/152445?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/bill/<id>`

#### URL Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | string | true | The unique ID of the bill to retrieve.

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.

#### Return Values

Same structure as above.


## Person

### Get all people

```shell
curl "http://api.popong.com/v0.1/person/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/person/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/person/`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

> The above command returns JSON structured like this:

```json
{
    "items": [
        {
            "wiki": "/wiki/%EB%B0%95%EC%98%81%EC%84%A0_(1960%EB%85%84)",
            "address_id": ["11", "11170", null],
            "name": "박영선",
            "twitter": "Park_Youngsun",
            "gender": "f",
            "image": "http://www.assembly.go.kr/photo/9770347.jpg",
            "name_cn": "朴映宣",
            "blog": "http://blog.naver.com/dolphin6010",
            "birthday": "1960-01-22",
            "facebook": "parkys21",
            "address": "서울 구로구 신도림로19길",
            "name_en": "PARK Young-sun",
            "education": "서강대학교 언론대학원 졸업(문학석사)",
            "homepage": "http://www.pys21.net",
            "id": 1960211,
            "education_id": ["7001818", null, null, null, null]
        },
        ...
    ],
    "kind": "popong#people",
    "next_page": 2
}
```

Key | Description
--- | -----------
wiki | URL path for person in the Korean Wikipedia. For example: `http://ko.wikipedia.org/wiki/%EC%86%90%ED%95%99%EA%B7%9C`.
address_id | Administrative address IDs of the person in three levels: provinces (시도), municipalities (시군구), submunicipalities (읍면동). `null` if value is unknown. Address IDs can be seen [here](https://github.com/teampopong/codebooks/#지역코드-region-codes).
name | Name of the person in Hangul.
twitter | Twitter handle of the person. For example: `http://twitter.com/<twitter>`.
gender | Gender of the person. Either "m" (male) or "f" (female).
image | URL for an image of the person. Mostly from `www.assembly.go.kr` or `data.popong.com`.
name_cn | Name of the person in Chinese characters.
blog | URL for the person's blog.
birthday | Birthday of the person in the format: "%Y-%m-%d".
facebook | Facebook handle of the person. For example: `http://facebook.com/<facebook>`.
address | Address of the person.
name_en | Name of the person in Alphabets.
education | Person's last attended educational institute.
homepage | URL of the person's homepage.
id | Person's unique ID, provided by Team POPONG. Consisted of the birth year of the person and a random number. You can also see the bill's info at: `http://pokr.kr/person/<id>`.
education_id | The ID list of the educational institutes the person attended. The list of educational institute IDs can be found [here](https://github.com/teampopong/codebooks/#고등교육기관코드-institution-codes)


### Search people

```shell
curl "http://api.popong.com/v0.1/person/search?q=박&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/person/search?q=박&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/person/search`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
q | string | false | LIKE search for value in the `name` field.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

Same structure as above.


### Get a specific person

```shell
curl "http://api.popong.com/v0.1/person/search?q=데이터&s=김영환&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/person/search?q=데이터&s=김영환&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/person/<id>`

#### URL Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | string | true | The unique ID of the person to retrieve.

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.

#### Return Values

Same structure as above.


## Party

### Get all parties

```shell
curl "http://api.popong.com/v0.1/party/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/party/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/party/`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

> The above command returns JSON structured like this:

```json
{
    "items": [
        {
            "color": null,
            "logo": "http://data.popong.com/parties/images/83.png",
            "size": 163,
            "id": 83,
            "name": "자유선진당"
        },
        ...
    ],
    "kind": "popong#parties",
    "next_page": 2
}
```

Key | Description
--- | -----------
color | HEX value for the party color.
logo | URL for the party's logo.
size | Number of members in the party.
id | Unique ID of the party, provided by Team POPONG. The list of party IDs can be seen [here](https://github.com/teampopong/codebooks/#정당코드-party-codes).
name | Name of the party.


### Search parties

```shell
curl "http://api.popong.com/v0.1/party/search?q=통합&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/party/search?q=통합&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/party/search`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
q | string | false | LIKE search for value in the `name` field.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

Same structure as above.


### Get a specific party

```shell
curl "http://api.popong.com/v0.1/party/<id>?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.1/party/<id>?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.1/party/<id>`

#### URL Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | string | true | The unique ID of the person to retrieve.

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.

#### Return Values

Same structure as above.
