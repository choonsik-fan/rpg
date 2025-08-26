# RPG

## info (json)

### register
```json
{
    "id": "test",
    "password": "{password}",
    "hash_key_1": "sha512(FIRST_SEED|{password}|{SECOND_SEED})",
    "hash_key_2": "sha512(SECOND_SEED|{password}|{THIRD_SEED})",
    "nickname": "테스트"
}
```

### login
```json
{
    "id": "test",
    "password": "sha512(FIRST_SEED|{password}|SECOND_SEED|THIRD_SEED)"
}
```

### game
```json
{
    "id": "test",
    "passkey": "sha512(FIRST_SEED|{id}|SECOND_SEED|{password}|THIRD_SEED)",
    "created_at": 0,
    "info": {}
}
```