class CreatePoems < ActiveRecord::Migration[7.0]
  def change
    create_table :poems do |t|
      t.string :title
      t.text :content
      t.date :date_posted
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
