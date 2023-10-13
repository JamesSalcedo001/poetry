class PoemsController < ApplicationController
    before_action :require_admin, only: [:create]


    def index
        render json: Poem.all
    end

    def show
        poem = Poem.find(params[:id])
        comments = poem.comments
        render json: { poem: poem, comments: comments }
    end

    def create
        new_poem = Poem.new(poem_params)
        new_poem.user = current_user
        if new_poem.save
            render json: new_poem
        else
            render json: poem.errors, status: :unprocessable_entity
        end
    end

    private 
    
    def poem_params
        params.permit(:title, :content)
    end

end
