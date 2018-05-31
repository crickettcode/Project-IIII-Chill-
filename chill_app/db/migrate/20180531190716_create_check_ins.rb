class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.string :time_of_day
      t.string :mood
      t.number :hunger
      t.number :energy
      t.number :physical
      t.number :mental
      t.number :motivated
      t.number :grateful
      t.number :supported

      t.timestamps
    end
  end
end
