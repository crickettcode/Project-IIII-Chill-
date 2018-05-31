class CreateJournalEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :journal_entries do |t|
      t.string :date
      t.string :paragraph_entry

      t.timestamps
    end
  end
end
