class PostingsController < ApplicationController
    before_action :set_posting, only: [:show]

    def index
        render json: Posting.all
    end

    def show
        @comments = @posting.comments
        render json: { posting: @posting, comments: @comments }
    end

    private

    def set_posting
        @posting = Posting.find(params[:id])
    end


end
