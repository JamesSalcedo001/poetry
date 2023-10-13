class CreatePostings < ActiveRecord::Migration[7.0]
  def change
    create_table :postings do |t|
      t.string :title
      t.string :preview
      t.belongs_to :poem, null: false, foreign_key: true

      t.timestamps
    end
  end
end
