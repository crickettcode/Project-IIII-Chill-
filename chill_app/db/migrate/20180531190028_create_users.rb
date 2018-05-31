class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :date_of_birth
      t.string :gender
      t.integer :height
      t.integer :weight

      t.timestamps
    end
  end
end
