# Open API (v0.2) - Unstable

<aside class="warning">
This version is in development.
Specifications are prone to change, so use at your own risk!
</aside>

Main changes in this version are as follows:

- Modified `bill` endpoints
    - Added `cosponsors`
    - Removed `is_processed`, `status_id`, `status_ids`, `link_id`
- Modified `person` endpoints
    - Removed `address_id`, `blog`, `education_id`
- Modified `party` endpoints
    - Removed `size` (due to inaccuracy)
- Created `statement` endpoints

## Bill

### Get all bills

```shell
curl "http://api.popong.com/v0.2/bill/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/bill/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/bill/`

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
            "sponsor": "김용태의원등 4인 외 281인",
            "document_url": null,
            "proposed_date": "1992-10-08",
            "name": "국무총리및국무위원출석요구의건(경제에관한질문II)",
            "assembly_id": 14,
            "decision_date": "1992-10-08",
            "cosponsors": [
                { "id": 1936134, "name": "김용태" },
                { "id": 1940116, "name": "김정남" },
                { "id": 1948129, "name": "이철" },
                ...
            ],
            "status": "정부이송",
            "id": "140077",
            "summary": null
        },
        ...
    ],
    "kind": "popong#bills",
    "next_page": 2
}
```

Key | Description
--- | -----------
sponsor | The sponsor and the total number of cosponsors.
document_url | URL of the bill's proposal PDF. Can be `null`.
proposed_date | The proposed date of the bill.
name | Title of the bill.
assembly_id | The assembly the bill was proposed.
decision_date | The final decision of the bill. Value should be `null` if the bill is still processing.
cosponsors | The list of cosponsors of the bill, with person ID and person name.
status | Current status of the bill.
id | Bill's unique ID, provided by the national assembly. You can also see the bill's info at: `http://pokr.kr/bill/<id>`.
summary | The summary of the bill. Can be `null`.


### Search bills

```shell
curl "http://api.popong.com/v0.2/bill/search?q=데이터&s=김영환&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/bill/search?q=데이터&s=김영환&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/bill/search`

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.
q | string | false | LIKE search for value in the `name` field.
s | string | false | LIKE search for value in the `sponsor` field.
assembly_id | string | false | Filter with the `assembly_id` field.
sort | string | false | Column name to sort by.
order | string | false | Sorting order. Can be set to either "asc" (ascending) or "desc" (descending). (default: desc)
page | int | false | Page number for request. (default: 1)
per_page | int | false | Number of items to be returned per request. (default: 20)

#### Return Values

Same structure as above.


### Get a specific bill

```shell
curl "http://api.popong.com/v0.2/bill/152445?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/bill/152445?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/bill/<id>`

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
curl "http://api.popong.com/v0.2/person/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/person/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/person/`

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
            "image": "http://www.assembly.go.kr/photo/9770347.jpg",
            "birthday": "1960-01-22",
            "facebook": "parkys21",
            "address": "서울 구로구 신도림로19길",
            "name_en": "PARK Young-sun",
            "education": "서강대학교 언론대학원 졸업(문학석사)",
            "id": 1960211,
            "name": "박영선",
            "gender": "f",
            "name_cn": "朴映宣",
            "homepage": "http://www.pys21.net",
            "twitter": "Park_Youngsun",
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
image | URL for an image of the person. Mostly from `www.assembly.go.kr` or `data.popong.com`.
birthday | Birthday of the person in the format: "%Y-%m-%d".
facebook | Facebook handle of the person. For example: `http://facebook.com/<facebook>`.
address | Address of the person.
name_en | Name of the person in Alphabets.
education | Person's last attended educational institute.
id | Person's unique ID, provided by Team POPONG. Consisted of the birth year of the person and a random number. You can also see the person's info at: `http://pokr.kr/person/<id>`.
name | Name of the person in Hangul.
gender | Gender of the person. Either "m" (male) or "f" (female).
name_cn | Name of the person in Chinese characters.
homepage | URL of the person's homepage.
twitter | Twitter handle of the person. For example: `http://twitter.com/<twitter>`.


### Search people

```shell
curl "http://api.popong.com/v0.2/person/search?q=박&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/person/search?q=박&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/person/search`

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
curl "http://api.popong.com/v0.2/person/search?q=데이터&s=김영환&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/person/search?q=데이터&s=김영환&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/person/<id>`

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
curl "http://api.popong.com/v0.2/party/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/party/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/party/`

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
id | Unique ID of the party, provided by Team POPONG. The list of party IDs can be seen [here](https://github.com/teampopong/codebooks/#정당코드-party-codes).
name | Name of the party.


### Search parties

```shell
curl "http://api.popong.com/v0.2/party/search?q=통합&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/party/search?q=통합&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/party/search`

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
curl "http://api.popong.com/v0.2/party/<id>?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/party/<id>?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/party/<id>`

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


## Statement

### Get all statements

```shell
curl "http://api.popong.com/v0.2/statement/?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/statement/?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/statement/`

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
            "content": "전면전 도발할 능력이 없다 하는 데 대해서는 우리 후보자님께서 아까는 전부 다 국민들에게 생중계됐단 말이에요. 그래서 그 부분에 대해서 명쾌하게, 한 15초 내에 명쾌하게 다시 한번 얘기하십시오.",
            "date": "2013-03-08",
            "speaker": "백군기 위원",
            "url": "http://pokr.kr/meeting/19314151672/dialog#1253599",
            "meeting_id": 19314151672,
            "person_id": 19501102,
            "sequence": 700,
            "id": 1253599
        },
        ...
    ],
    "kind": "popong#statements",
    "next_page": 2
}
```

Key | Description
--- | -----------
content | Content of the statement.
date | Date when the statement occurred.
speaker | Speaker of the statement.
url | URL of the statement in http://pokr.kr.
meeting_id | Unique ID of the meeting of which the statement occurred, provided by Team POPONG. The ID is consisted of the Assembly ID (대) + Session ID (회) + Sitting ID (차) + an MD5 of the committee name. (The exact code can be seen [here](https://github.com/teampopong/pokr.kr/blob/master/pokr/scripts/meeting.py#L84).)
person_id | Person ID of the speaker, provided by Team POPONG. You can also see the person's info at: `http://pokr.kr/person/<id>`.
sequence | The sequence number among statements in the corresponding meeting.
id | Unique ID of the statement.


### Search statements

```shell
curl "http://api.popong.com/v0.2/statement/search?q=육아&api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/statement/search?q=육아&api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/statement/search`

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


### Get a specific statement

```shell
curl "http://api.popong.com/v0.2/statement/<id>?api_key=test"
```

```python
import requests
requests.get("http://api.popong.com/v0.2/statement/<id>?api_key=test")
```

#### HTTP Request

`GET http://api.popong.com/v0.2/statement/<id>`

#### URL Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | string | true | The unique ID of the statement to retrieve.

#### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
api_key | string | true | Your API key.

#### Return Values

Same structure as above.
