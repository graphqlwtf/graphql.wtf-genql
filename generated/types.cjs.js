module.exports = {
    "scalars": [
        12,
        32,
        36,
        37,
        38,
        42,
        43,
        44,
        45,
        48,
        49,
        50,
        53,
        65,
        79,
        81,
        83,
        84,
        85,
        86,
        94,
        96,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110
    ],
    "types": {
        "Aggregate": {
            "count": [
                48
            ],
            "__typename": [
                85
            ]
        },
        "Asset": {
            "stage": [
                84
            ],
            "locale": [
                50
            ],
            "localizations": [
                1,
                {
                    "locales": [
                        50,
                        "[Locale!]!"
                    ],
                    "includeCurrent": [
                        32,
                        "Boolean!"
                    ]
                }
            ],
            "documentInStages": [
                1,
                {
                    "stages": [
                        84,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        32,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        32,
                        "Boolean!"
                    ]
                }
            ],
            "id": [
                44
            ],
            "createdAt": [
                37,
                {
                    "variation": [
                        86,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "updatedAt": [
                37,
                {
                    "variation": [
                        86,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "publishedAt": [
                37,
                {
                    "variation": [
                        86,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "handle": [
                85
            ],
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "createdBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "updatedBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "publishedBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "imageProduct": [
                57,
                {
                    "where": [
                        74
                    ],
                    "orderBy": [
                        65
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "history": [
                101,
                {
                    "limit": [
                        48,
                        "Int!"
                    ],
                    "skip": [
                        48,
                        "Int!"
                    ],
                    "stageOverride": [
                        84
                    ]
                }
            ],
            "url": [
                85,
                {
                    "transformation": [
                        13
                    ]
                }
            ],
            "__typename": [
                85
            ]
        },
        "AssetConnectInput": {
            "where": [
                30
            ],
            "position": [
                35
            ],
            "__typename": [
                85
            ]
        },
        "AssetConnection": {
            "pageInfo": [
                56
            ],
            "edges": [
                10
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateInput": {
            "createdAt": [
                37
            ],
            "updatedAt": [
                37
            ],
            "handle": [
                85
            ],
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "imageProduct": [
                61
            ],
            "localizations": [
                7
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateLocalizationDataInput": {
            "createdAt": [
                37
            ],
            "updatedAt": [
                37
            ],
            "handle": [
                85
            ],
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateLocalizationInput": {
            "data": [
                5
            ],
            "locale": [
                50
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateLocalizationsInput": {
            "create": [
                6
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateManyInlineInput": {
            "create": [
                4
            ],
            "connect": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "AssetCreateOneInlineInput": {
            "create": [
                4
            ],
            "connect": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "AssetEdge": {
            "node": [
                1
            ],
            "cursor": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "AssetManyWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                29
            ],
            "OR": [
                29
            ],
            "NOT": [
                29
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "createdBy": [
                99
            ],
            "updatedBy": [
                99
            ],
            "publishedBy": [
                99
            ],
            "imageProduct_every": [
                74
            ],
            "imageProduct_some": [
                74
            ],
            "imageProduct_none": [
                74
            ],
            "__typename": [
                85
            ]
        },
        "AssetOrderByInput": {},
        "AssetTransformationInput": {
            "image": [
                47
            ],
            "document": [
                40
            ],
            "validateOptions": [
                32
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateInput": {
            "handle": [
                85
            ],
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "imageProduct": [
                67
            ],
            "localizations": [
                17
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateLocalizationDataInput": {
            "handle": [
                85
            ],
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateLocalizationInput": {
            "data": [
                15
            ],
            "locale": [
                50
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateLocalizationsInput": {
            "create": [
                6
            ],
            "update": [
                16
            ],
            "upsert": [
                27
            ],
            "delete": [
                50
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyInlineInput": {
            "create": [
                4
            ],
            "connect": [
                2
            ],
            "set": [
                30
            ],
            "update": [
                25
            ],
            "upsert": [
                28
            ],
            "disconnect": [
                30
            ],
            "delete": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyInput": {
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "localizations": [
                22
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyLocalizationDataInput": {
            "fileName": [
                85
            ],
            "height": [
                42
            ],
            "width": [
                42
            ],
            "size": [
                42
            ],
            "mimeType": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyLocalizationInput": {
            "data": [
                20
            ],
            "locale": [
                50
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyLocalizationsInput": {
            "update": [
                21
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateManyWithNestedWhereInput": {
            "where": [
                29
            ],
            "data": [
                19
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateOneInlineInput": {
            "create": [
                4
            ],
            "update": [
                25
            ],
            "upsert": [
                28
            ],
            "connect": [
                30
            ],
            "disconnect": [
                32
            ],
            "delete": [
                32
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpdateWithNestedWhereUniqueInput": {
            "where": [
                30
            ],
            "data": [
                14
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpsertInput": {
            "create": [
                4
            ],
            "update": [
                14
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpsertLocalizationInput": {
            "update": [
                15
            ],
            "create": [
                5
            ],
            "locale": [
                50
            ],
            "__typename": [
                85
            ]
        },
        "AssetUpsertWithNestedWhereUniqueInput": {
            "where": [
                30
            ],
            "data": [
                26
            ],
            "__typename": [
                85
            ]
        },
        "AssetWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                29
            ],
            "OR": [
                29
            ],
            "NOT": [
                29
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "handle": [
                85
            ],
            "handle_not": [
                85
            ],
            "handle_in": [
                85
            ],
            "handle_not_in": [
                85
            ],
            "handle_contains": [
                85
            ],
            "handle_not_contains": [
                85
            ],
            "handle_starts_with": [
                85
            ],
            "handle_not_starts_with": [
                85
            ],
            "handle_ends_with": [
                85
            ],
            "handle_not_ends_with": [
                85
            ],
            "fileName": [
                85
            ],
            "fileName_not": [
                85
            ],
            "fileName_in": [
                85
            ],
            "fileName_not_in": [
                85
            ],
            "fileName_contains": [
                85
            ],
            "fileName_not_contains": [
                85
            ],
            "fileName_starts_with": [
                85
            ],
            "fileName_not_starts_with": [
                85
            ],
            "fileName_ends_with": [
                85
            ],
            "fileName_not_ends_with": [
                85
            ],
            "height": [
                42
            ],
            "height_not": [
                42
            ],
            "height_in": [
                42
            ],
            "height_not_in": [
                42
            ],
            "height_lt": [
                42
            ],
            "height_lte": [
                42
            ],
            "height_gt": [
                42
            ],
            "height_gte": [
                42
            ],
            "width": [
                42
            ],
            "width_not": [
                42
            ],
            "width_in": [
                42
            ],
            "width_not_in": [
                42
            ],
            "width_lt": [
                42
            ],
            "width_lte": [
                42
            ],
            "width_gt": [
                42
            ],
            "width_gte": [
                42
            ],
            "size": [
                42
            ],
            "size_not": [
                42
            ],
            "size_in": [
                42
            ],
            "size_not_in": [
                42
            ],
            "size_lt": [
                42
            ],
            "size_lte": [
                42
            ],
            "size_gt": [
                42
            ],
            "size_gte": [
                42
            ],
            "mimeType": [
                85
            ],
            "mimeType_not": [
                85
            ],
            "mimeType_in": [
                85
            ],
            "mimeType_not_in": [
                85
            ],
            "mimeType_contains": [
                85
            ],
            "mimeType_not_contains": [
                85
            ],
            "mimeType_starts_with": [
                85
            ],
            "mimeType_not_starts_with": [
                85
            ],
            "mimeType_ends_with": [
                85
            ],
            "mimeType_not_ends_with": [
                85
            ],
            "createdBy": [
                99
            ],
            "updatedBy": [
                99
            ],
            "publishedBy": [
                99
            ],
            "imageProduct_every": [
                74
            ],
            "imageProduct_some": [
                74
            ],
            "imageProduct_none": [
                74
            ],
            "__typename": [
                85
            ]
        },
        "AssetWhereUniqueInput": {
            "id": [
                44
            ],
            "__typename": [
                85
            ]
        },
        "BatchPayload": {
            "count": [
                53
            ],
            "__typename": [
                85
            ]
        },
        "Boolean": {},
        "Color": {
            "hex": [
                43
            ],
            "rgba": [
                78
            ],
            "css": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ColorInput": {
            "hex": [
                43
            ],
            "rgba": [
                80
            ],
            "__typename": [
                85
            ]
        },
        "ConnectPositionInput": {
            "after": [
                44
            ],
            "before": [
                44
            ],
            "start": [
                32
            ],
            "end": [
                32
            ],
            "__typename": [
                85
            ]
        },
        "Date": {},
        "DateTime": {},
        "DocumentFileTypes": {},
        "DocumentOutputInput": {
            "format": [
                38
            ],
            "__typename": [
                85
            ]
        },
        "DocumentTransformationInput": {
            "output": [
                39
            ],
            "__typename": [
                85
            ]
        },
        "DocumentVersion": {
            "id": [
                44
            ],
            "stage": [
                84
            ],
            "revision": [
                48
            ],
            "createdAt": [
                37
            ],
            "data": [
                49
            ],
            "__typename": [
                85
            ]
        },
        "Float": {},
        "Hex": {},
        "ID": {},
        "ImageFit": {},
        "ImageResizeInput": {
            "width": [
                48
            ],
            "height": [
                48
            ],
            "fit": [
                45
            ],
            "__typename": [
                85
            ]
        },
        "ImageTransformationInput": {
            "resize": [
                46
            ],
            "__typename": [
                85
            ]
        },
        "Int": {},
        "Json": {},
        "Locale": {},
        "Location": {
            "latitude": [
                42
            ],
            "longitude": [
                42
            ],
            "distance": [
                42,
                {
                    "from": [
                        52,
                        "LocationInput!"
                    ]
                }
            ],
            "__typename": [
                85
            ]
        },
        "LocationInput": {
            "latitude": [
                42
            ],
            "longitude": [
                42
            ],
            "__typename": [
                85
            ]
        },
        "Long": {},
        "Mutation": {
            "createAsset": [
                1,
                {
                    "data": [
                        4,
                        "AssetCreateInput!"
                    ]
                }
            ],
            "updateAsset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ],
                    "data": [
                        14,
                        "AssetUpdateInput!"
                    ]
                }
            ],
            "deleteAsset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ]
                }
            ],
            "upsertAsset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ],
                    "upsert": [
                        26,
                        "AssetUpsertInput!"
                    ]
                }
            ],
            "publishAsset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        32
                    ],
                    "withDefaultLocale": [
                        32
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishAsset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        32
                    ]
                }
            ],
            "updateManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "data": [
                        19,
                        "AssetUpdateManyInput!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "deleteManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "publishManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "from": [
                        84
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        32
                    ],
                    "withDefaultLocale": [
                        32
                    ]
                }
            ],
            "unpublishManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "stage": [
                        84
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        32
                    ]
                }
            ],
            "updateManyAssets": [
                31,
                {
                    "where": [
                        11
                    ],
                    "data": [
                        19,
                        "AssetUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyAssets": [
                31,
                {
                    "where": [
                        11
                    ]
                }
            ],
            "publishManyAssets": [
                31,
                {
                    "where": [
                        11
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        32
                    ],
                    "withDefaultLocale": [
                        32
                    ]
                }
            ],
            "unpublishManyAssets": [
                31,
                {
                    "where": [
                        11
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        32
                    ]
                }
            ],
            "createProduct": [
                57,
                {
                    "data": [
                        60,
                        "ProductCreateInput!"
                    ]
                }
            ],
            "updateProduct": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ],
                    "data": [
                        66,
                        "ProductUpdateInput!"
                    ]
                }
            ],
            "deleteProduct": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ]
                }
            ],
            "upsertProduct": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ],
                    "upsert": [
                        72,
                        "ProductUpsertInput!"
                    ]
                }
            ],
            "publishProduct": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishProduct": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ]
                }
            ],
            "updateManyProductsConnection": [
                59,
                {
                    "where": [
                        64
                    ],
                    "data": [
                        68,
                        "ProductUpdateManyInput!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "deleteManyProductsConnection": [
                59,
                {
                    "where": [
                        64
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "publishManyProductsConnection": [
                59,
                {
                    "where": [
                        64
                    ],
                    "from": [
                        84
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "unpublishManyProductsConnection": [
                59,
                {
                    "where": [
                        64
                    ],
                    "stage": [
                        84
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ],
                    "skip": [
                        48
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "before": [
                        44
                    ],
                    "after": [
                        44
                    ]
                }
            ],
            "updateManyProducts": [
                31,
                {
                    "where": [
                        64
                    ],
                    "data": [
                        68,
                        "ProductUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyProducts": [
                31,
                {
                    "where": [
                        64
                    ]
                }
            ],
            "publishManyProducts": [
                31,
                {
                    "where": [
                        64
                    ],
                    "to": [
                        84,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishManyProducts": [
                31,
                {
                    "where": [
                        64
                    ],
                    "from": [
                        84,
                        "[Stage!]!"
                    ]
                }
            ],
            "__typename": [
                85
            ]
        },
        "Node": {
            "id": [
                44
            ],
            "stage": [
                84
            ],
            "on_Asset": [
                1
            ],
            "on_Product": [
                57
            ],
            "on_User": [
                88
            ],
            "__typename": [
                85
            ]
        },
        "PageInfo": {
            "hasNextPage": [
                32
            ],
            "hasPreviousPage": [
                32
            ],
            "startCursor": [
                85
            ],
            "endCursor": [
                85
            ],
            "pageSize": [
                48
            ],
            "__typename": [
                85
            ]
        },
        "Product": {
            "stage": [
                84
            ],
            "documentInStages": [
                57,
                {
                    "stages": [
                        84,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        32,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        32,
                        "Boolean!"
                    ]
                }
            ],
            "id": [
                44
            ],
            "createdAt": [
                37
            ],
            "updatedAt": [
                37
            ],
            "publishedAt": [
                37
            ],
            "name": [
                85
            ],
            "slug": [
                85
            ],
            "description": [
                85
            ],
            "price": [
                48
            ],
            "createdBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "updatedBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "publishedBy": [
                88,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "image": [
                1,
                {
                    "locales": [
                        50,
                        "[Locale!]"
                    ]
                }
            ],
            "history": [
                101,
                {
                    "limit": [
                        48,
                        "Int!"
                    ],
                    "skip": [
                        48,
                        "Int!"
                    ],
                    "stageOverride": [
                        84
                    ]
                }
            ],
            "__typename": [
                85
            ]
        },
        "ProductConnectInput": {
            "where": [
                75
            ],
            "position": [
                35
            ],
            "__typename": [
                85
            ]
        },
        "ProductConnection": {
            "pageInfo": [
                56
            ],
            "edges": [
                63
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                85
            ]
        },
        "ProductCreateInput": {
            "createdAt": [
                37
            ],
            "updatedAt": [
                37
            ],
            "name": [
                85
            ],
            "slug": [
                85
            ],
            "description": [
                85
            ],
            "price": [
                48
            ],
            "image": [
                9
            ],
            "__typename": [
                85
            ]
        },
        "ProductCreateManyInlineInput": {
            "create": [
                60
            ],
            "connect": [
                75
            ],
            "__typename": [
                85
            ]
        },
        "ProductCreateOneInlineInput": {
            "create": [
                60
            ],
            "connect": [
                75
            ],
            "__typename": [
                85
            ]
        },
        "ProductEdge": {
            "node": [
                57
            ],
            "cursor": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ProductManyWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                74
            ],
            "OR": [
                74
            ],
            "NOT": [
                74
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "name": [
                85
            ],
            "name_not": [
                85
            ],
            "name_in": [
                85
            ],
            "name_not_in": [
                85
            ],
            "name_contains": [
                85
            ],
            "name_not_contains": [
                85
            ],
            "name_starts_with": [
                85
            ],
            "name_not_starts_with": [
                85
            ],
            "name_ends_with": [
                85
            ],
            "name_not_ends_with": [
                85
            ],
            "slug": [
                85
            ],
            "slug_not": [
                85
            ],
            "slug_in": [
                85
            ],
            "slug_not_in": [
                85
            ],
            "slug_contains": [
                85
            ],
            "slug_not_contains": [
                85
            ],
            "slug_starts_with": [
                85
            ],
            "slug_not_starts_with": [
                85
            ],
            "slug_ends_with": [
                85
            ],
            "slug_not_ends_with": [
                85
            ],
            "description": [
                85
            ],
            "description_not": [
                85
            ],
            "description_in": [
                85
            ],
            "description_not_in": [
                85
            ],
            "description_contains": [
                85
            ],
            "description_not_contains": [
                85
            ],
            "description_starts_with": [
                85
            ],
            "description_not_starts_with": [
                85
            ],
            "description_ends_with": [
                85
            ],
            "description_not_ends_with": [
                85
            ],
            "price": [
                48
            ],
            "price_not": [
                48
            ],
            "price_in": [
                48
            ],
            "price_not_in": [
                48
            ],
            "price_lt": [
                48
            ],
            "price_lte": [
                48
            ],
            "price_gt": [
                48
            ],
            "price_gte": [
                48
            ],
            "createdBy": [
                99
            ],
            "updatedBy": [
                99
            ],
            "publishedBy": [
                99
            ],
            "image": [
                29
            ],
            "__typename": [
                85
            ]
        },
        "ProductOrderByInput": {},
        "ProductUpdateInput": {
            "name": [
                85
            ],
            "slug": [
                85
            ],
            "description": [
                85
            ],
            "price": [
                48
            ],
            "image": [
                24
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpdateManyInlineInput": {
            "create": [
                60
            ],
            "connect": [
                58
            ],
            "set": [
                75
            ],
            "update": [
                71
            ],
            "upsert": [
                73
            ],
            "disconnect": [
                75
            ],
            "delete": [
                75
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpdateManyInput": {
            "name": [
                85
            ],
            "description": [
                85
            ],
            "price": [
                48
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpdateManyWithNestedWhereInput": {
            "where": [
                74
            ],
            "data": [
                68
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpdateOneInlineInput": {
            "create": [
                60
            ],
            "update": [
                71
            ],
            "upsert": [
                73
            ],
            "connect": [
                75
            ],
            "disconnect": [
                32
            ],
            "delete": [
                32
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpdateWithNestedWhereUniqueInput": {
            "where": [
                75
            ],
            "data": [
                66
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpsertInput": {
            "create": [
                60
            ],
            "update": [
                66
            ],
            "__typename": [
                85
            ]
        },
        "ProductUpsertWithNestedWhereUniqueInput": {
            "where": [
                75
            ],
            "data": [
                72
            ],
            "__typename": [
                85
            ]
        },
        "ProductWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                74
            ],
            "OR": [
                74
            ],
            "NOT": [
                74
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "name": [
                85
            ],
            "name_not": [
                85
            ],
            "name_in": [
                85
            ],
            "name_not_in": [
                85
            ],
            "name_contains": [
                85
            ],
            "name_not_contains": [
                85
            ],
            "name_starts_with": [
                85
            ],
            "name_not_starts_with": [
                85
            ],
            "name_ends_with": [
                85
            ],
            "name_not_ends_with": [
                85
            ],
            "slug": [
                85
            ],
            "slug_not": [
                85
            ],
            "slug_in": [
                85
            ],
            "slug_not_in": [
                85
            ],
            "slug_contains": [
                85
            ],
            "slug_not_contains": [
                85
            ],
            "slug_starts_with": [
                85
            ],
            "slug_not_starts_with": [
                85
            ],
            "slug_ends_with": [
                85
            ],
            "slug_not_ends_with": [
                85
            ],
            "description": [
                85
            ],
            "description_not": [
                85
            ],
            "description_in": [
                85
            ],
            "description_not_in": [
                85
            ],
            "description_contains": [
                85
            ],
            "description_not_contains": [
                85
            ],
            "description_starts_with": [
                85
            ],
            "description_not_starts_with": [
                85
            ],
            "description_ends_with": [
                85
            ],
            "description_not_ends_with": [
                85
            ],
            "price": [
                48
            ],
            "price_not": [
                48
            ],
            "price_in": [
                48
            ],
            "price_not_in": [
                48
            ],
            "price_lt": [
                48
            ],
            "price_lte": [
                48
            ],
            "price_gt": [
                48
            ],
            "price_gte": [
                48
            ],
            "createdBy": [
                99
            ],
            "updatedBy": [
                99
            ],
            "publishedBy": [
                99
            ],
            "image": [
                29
            ],
            "__typename": [
                85
            ]
        },
        "ProductWhereUniqueInput": {
            "id": [
                44
            ],
            "slug": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "PublishLocaleInput": {
            "locale": [
                50
            ],
            "stages": [
                84
            ],
            "__typename": [
                85
            ]
        },
        "Query": {
            "node": [
                55,
                {
                    "id": [
                        44,
                        "ID!"
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "users": [
                88,
                {
                    "where": [
                        99
                    ],
                    "orderBy": [
                        96
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "user": [
                88,
                {
                    "where": [
                        100,
                        "UserWhereUniqueInput!"
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "usersConnection": [
                90,
                {
                    "where": [
                        99
                    ],
                    "orderBy": [
                        96
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "assets": [
                1,
                {
                    "where": [
                        29
                    ],
                    "orderBy": [
                        12
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "asset": [
                1,
                {
                    "where": [
                        30,
                        "AssetWhereUniqueInput!"
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "assetsConnection": [
                3,
                {
                    "where": [
                        29
                    ],
                    "orderBy": [
                        12
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "assetVersion": [
                41,
                {
                    "where": [
                        102,
                        "VersionWhereInput!"
                    ]
                }
            ],
            "products": [
                57,
                {
                    "where": [
                        74
                    ],
                    "orderBy": [
                        65
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "product": [
                57,
                {
                    "where": [
                        75,
                        "ProductWhereUniqueInput!"
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "productsConnection": [
                59,
                {
                    "where": [
                        74
                    ],
                    "orderBy": [
                        65
                    ],
                    "skip": [
                        48
                    ],
                    "after": [
                        85
                    ],
                    "before": [
                        85
                    ],
                    "first": [
                        48
                    ],
                    "last": [
                        48
                    ],
                    "stage": [
                        84,
                        "Stage!"
                    ],
                    "locales": [
                        50,
                        "[Locale!]!"
                    ]
                }
            ],
            "productVersion": [
                41,
                {
                    "where": [
                        102,
                        "VersionWhereInput!"
                    ]
                }
            ],
            "__typename": [
                85
            ]
        },
        "RGBA": {
            "r": [
                79
            ],
            "g": [
                79
            ],
            "b": [
                79
            ],
            "a": [
                81
            ],
            "__typename": [
                85
            ]
        },
        "RGBAHue": {},
        "RGBAInput": {
            "r": [
                79
            ],
            "g": [
                79
            ],
            "b": [
                79
            ],
            "a": [
                81
            ],
            "__typename": [
                85
            ]
        },
        "RGBATransparency": {},
        "RichText": {
            "raw": [
                83
            ],
            "html": [
                85
            ],
            "markdown": [
                85
            ],
            "text": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "RichTextAST": {},
        "Stage": {},
        "String": {},
        "SystemDateTimeFieldVariation": {},
        "UnpublishLocaleInput": {
            "locale": [
                50
            ],
            "stages": [
                84
            ],
            "__typename": [
                85
            ]
        },
        "User": {
            "stage": [
                84
            ],
            "documentInStages": [
                88,
                {
                    "stages": [
                        84,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        32,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        32,
                        "Boolean!"
                    ]
                }
            ],
            "id": [
                44
            ],
            "createdAt": [
                37
            ],
            "updatedAt": [
                37
            ],
            "publishedAt": [
                37
            ],
            "name": [
                85
            ],
            "picture": [
                85
            ],
            "isActive": [
                32
            ],
            "kind": [
                94
            ],
            "__typename": [
                85
            ]
        },
        "UserConnectInput": {
            "where": [
                100
            ],
            "position": [
                35
            ],
            "__typename": [
                85
            ]
        },
        "UserConnection": {
            "pageInfo": [
                56
            ],
            "edges": [
                93
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                85
            ]
        },
        "UserCreateManyInlineInput": {
            "connect": [
                100
            ],
            "__typename": [
                85
            ]
        },
        "UserCreateOneInlineInput": {
            "connect": [
                100
            ],
            "__typename": [
                85
            ]
        },
        "UserEdge": {
            "node": [
                88
            ],
            "cursor": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "UserKind": {},
        "UserManyWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                99
            ],
            "OR": [
                99
            ],
            "NOT": [
                99
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "name": [
                85
            ],
            "name_not": [
                85
            ],
            "name_in": [
                85
            ],
            "name_not_in": [
                85
            ],
            "name_contains": [
                85
            ],
            "name_not_contains": [
                85
            ],
            "name_starts_with": [
                85
            ],
            "name_not_starts_with": [
                85
            ],
            "name_ends_with": [
                85
            ],
            "name_not_ends_with": [
                85
            ],
            "picture": [
                85
            ],
            "picture_not": [
                85
            ],
            "picture_in": [
                85
            ],
            "picture_not_in": [
                85
            ],
            "picture_contains": [
                85
            ],
            "picture_not_contains": [
                85
            ],
            "picture_starts_with": [
                85
            ],
            "picture_not_starts_with": [
                85
            ],
            "picture_ends_with": [
                85
            ],
            "picture_not_ends_with": [
                85
            ],
            "isActive": [
                32
            ],
            "isActive_not": [
                32
            ],
            "kind": [
                94
            ],
            "kind_not": [
                94
            ],
            "kind_in": [
                94
            ],
            "kind_not_in": [
                94
            ],
            "__typename": [
                85
            ]
        },
        "UserOrderByInput": {},
        "UserUpdateManyInlineInput": {
            "connect": [
                89
            ],
            "set": [
                100
            ],
            "disconnect": [
                100
            ],
            "__typename": [
                85
            ]
        },
        "UserUpdateOneInlineInput": {
            "connect": [
                100
            ],
            "disconnect": [
                32
            ],
            "__typename": [
                85
            ]
        },
        "UserWhereInput": {
            "_search": [
                85
            ],
            "AND": [
                99
            ],
            "OR": [
                99
            ],
            "NOT": [
                99
            ],
            "id": [
                44
            ],
            "id_not": [
                44
            ],
            "id_in": [
                44
            ],
            "id_not_in": [
                44
            ],
            "id_contains": [
                44
            ],
            "id_not_contains": [
                44
            ],
            "id_starts_with": [
                44
            ],
            "id_not_starts_with": [
                44
            ],
            "id_ends_with": [
                44
            ],
            "id_not_ends_with": [
                44
            ],
            "createdAt": [
                37
            ],
            "createdAt_not": [
                37
            ],
            "createdAt_in": [
                37
            ],
            "createdAt_not_in": [
                37
            ],
            "createdAt_lt": [
                37
            ],
            "createdAt_lte": [
                37
            ],
            "createdAt_gt": [
                37
            ],
            "createdAt_gte": [
                37
            ],
            "updatedAt": [
                37
            ],
            "updatedAt_not": [
                37
            ],
            "updatedAt_in": [
                37
            ],
            "updatedAt_not_in": [
                37
            ],
            "updatedAt_lt": [
                37
            ],
            "updatedAt_lte": [
                37
            ],
            "updatedAt_gt": [
                37
            ],
            "updatedAt_gte": [
                37
            ],
            "publishedAt": [
                37
            ],
            "publishedAt_not": [
                37
            ],
            "publishedAt_in": [
                37
            ],
            "publishedAt_not_in": [
                37
            ],
            "publishedAt_lt": [
                37
            ],
            "publishedAt_lte": [
                37
            ],
            "publishedAt_gt": [
                37
            ],
            "publishedAt_gte": [
                37
            ],
            "name": [
                85
            ],
            "name_not": [
                85
            ],
            "name_in": [
                85
            ],
            "name_not_in": [
                85
            ],
            "name_contains": [
                85
            ],
            "name_not_contains": [
                85
            ],
            "name_starts_with": [
                85
            ],
            "name_not_starts_with": [
                85
            ],
            "name_ends_with": [
                85
            ],
            "name_not_ends_with": [
                85
            ],
            "picture": [
                85
            ],
            "picture_not": [
                85
            ],
            "picture_in": [
                85
            ],
            "picture_not_in": [
                85
            ],
            "picture_contains": [
                85
            ],
            "picture_not_contains": [
                85
            ],
            "picture_starts_with": [
                85
            ],
            "picture_not_starts_with": [
                85
            ],
            "picture_ends_with": [
                85
            ],
            "picture_not_ends_with": [
                85
            ],
            "isActive": [
                32
            ],
            "isActive_not": [
                32
            ],
            "kind": [
                94
            ],
            "kind_not": [
                94
            ],
            "kind_in": [
                94
            ],
            "kind_not_in": [
                94
            ],
            "__typename": [
                85
            ]
        },
        "UserWhereUniqueInput": {
            "id": [
                44
            ],
            "__typename": [
                85
            ]
        },
        "Version": {
            "id": [
                44
            ],
            "stage": [
                84
            ],
            "revision": [
                48
            ],
            "createdAt": [
                37
            ],
            "__typename": [
                85
            ]
        },
        "VersionWhereInput": {
            "id": [
                44
            ],
            "stage": [
                84
            ],
            "revision": [
                48
            ],
            "__typename": [
                85
            ]
        },
        "_FilterKind": {},
        "_MutationInputFieldKind": {},
        "_MutationKind": {},
        "_OrderDirection": {},
        "_RelationInputCardinality": {},
        "_RelationInputKind": {},
        "_RelationKind": {},
        "_SystemDateTimeFieldVariation": {}
    }
}