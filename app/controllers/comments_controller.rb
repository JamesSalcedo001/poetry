class CommentsController < ApplicationController
    before_action :require_login

    def create
        comment = Comment.new(comment_params)
        comment.user = @current_user
        comment.poem_id = params[:poem_id]
        if comment.save
            render json: comment, status: :created
        else
            render json: comment.errors, status: :unprocessable_entity
        end
    end

    private 

    def comment_params
        params.permit(:content)
    end

end
