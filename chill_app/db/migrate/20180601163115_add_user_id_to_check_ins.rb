class AddUserIdToCheckIns < ActiveRecord::Migration[5.2]
  def change
    add_reference :check_ins, :user, foreign_key: true
  end
end
