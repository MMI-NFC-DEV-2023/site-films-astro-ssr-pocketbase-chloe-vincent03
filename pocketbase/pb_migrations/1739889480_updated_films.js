/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1335826611",
    "hidden": false,
    "id": "relation3791634994",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "scenaristes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("relation3791634994")

  return app.save(collection)
})
