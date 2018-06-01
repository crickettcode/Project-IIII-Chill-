class Api::JournalEntriesController < ApplicationController

def index 
    @journal_entries = User.find(params[:user_id]).journal_entries
    render json:@journal_entries
end 

def show 
    @journal_entries = JournalEntry.find(params[:id])
    render json: @journal_entries
end 

def create 
    @user = User.find(params[:user_id])
    @journal_entries = @user.journal_entries.create!(journal_entry_params)
    render json: @journal_entries
end 



private 

def journal_entry_params 

    params.require(:journal_entry).permit(:date, :paragraph_entry)

end 
end 