class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.string :time_of_day
      t.string :mood
      t.integer :hunger
      t.integer :energy
      t.integer :physical
      t.integer :mental
      t.integer :motivated
      t.integer :grateful
      t.integer :supported

      t.timestamps
    end
  end
end
