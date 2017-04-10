# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170410144415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collections", force: :cascade do |t|
    t.string   "title"
    t.string   "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.text     "billing"
    t.text     "shipping"
    t.string   "stripeid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "product_id"
    t.integer  "size_id"
    t.integer  "style_id"
    t.string   "email"
    t.index ["product_id"], name: "index_orders_on_product_id", using: :btree
    t.index ["size_id"], name: "index_orders_on_size_id", using: :btree
    t.index ["style_id"], name: "index_orders_on_style_id", using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.integer  "price"
    t.integer  "collection_id"
    t.string   "audio"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["collection_id"], name: "index_products_on_collection_id", using: :btree
  end

  create_table "sizes", force: :cascade do |t|
    t.string   "title"
    t.string   "photo"
    t.string   "audio"
    t.text     "description"
    t.integer  "product_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["product_id"], name: "index_sizes_on_product_id", using: :btree
  end

  create_table "styles", force: :cascade do |t|
    t.string   "photo"
    t.text     "description"
    t.integer  "product_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["product_id"], name: "index_styles_on_product_id", using: :btree
  end

  add_foreign_key "orders", "products"
  add_foreign_key "orders", "sizes"
  add_foreign_key "orders", "styles"
  add_foreign_key "products", "collections"
  add_foreign_key "sizes", "products"
  add_foreign_key "styles", "products"
end
