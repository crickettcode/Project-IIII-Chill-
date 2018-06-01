class Api::JournalEntriesController < ApplicationController

def index 
    @journal_entries = User.find(params[:user_id]).journal_entries
    render json:@journal_entries
end 

def show 
    @journal_entries = JournalEntry.find(params[:id])
    render json: @journal_entries
end 

# def create 
# @user = User.create!(user_params)
# render json:@user
# end 

# def show 
# @user = User.find(params[:id])
# render json:@user
# end 

# def update
# @user = User.find(params[:id])
# @user.update!(user_params)

# render json: @user 
# end

# def destroy 
# @user = User.find(params[:id]).delete

# render status: :ok
# end

# private 
# def user_params
# params.require(:user).permit(:username,:email,:date_of_birth,:gender,:height,:weight)
# end

# end


private 

def journal_entry_params 

    params.require(:journal_entry).permit(:date, :paragraph_entry)

end 
end 