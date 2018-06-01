class Api::CheckInsController < ApplicationController

def index 
        @check_ins = User.find(params[:user_id]).check_ins
        render json:@check_ins
    end 
    
    def show 
        @check_ins = CheckIn.find(params[:id])
        render json: @check_ins
    end 
    
    # def create 
    #     @user = User.find(params[:user_id])
    #     @journal_entries = @user.journal_entries.create!(journal_entry_params)
    #     render json: @journal_entries
    # end 
    
    
    
    private 
    
    def check_ins_params 
    
        params.require(:check_ins).permit(:time_of_day, :mood, :hunger, :energy, :physical, :mental, :motivated, :grateful, :supported,)
    
    end 
    

end
