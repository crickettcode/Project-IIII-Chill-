class User < ApplicationRecord
has_many :journal_entries, dependent: :destroy
 has_many :check_ins, dependent: :destroy
end 
