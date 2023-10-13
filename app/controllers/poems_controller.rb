class PoemsController < ApplicationController
    before_action :require_admin

    def create
        new_poem = Poem.create!(poem_params)
        render json: new_poem
    end

    private 
    
    def poem_params
        params.permit(:title, :content, :date_posted)
    end

end
