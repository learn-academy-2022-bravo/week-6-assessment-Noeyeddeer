# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller file is created in the generate controller command and allows us to define an action which will occur when a method is reached.
class BlogPostsController < ApplicationController
  def index
    # ---2) The instance variable posts contains the database action we want to execute, in this case showing all items in the model BlogPost.
    @posts = BlogPost.all
  end

  # ---3) The show method is used to bring up one item from a particular database.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method is used to display a form to the user.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The instance variable post contains a database action used to submit user data to the BlogPost database based on a set of params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The instance variable post contains a database action which displays a form to the user which can be used to modify a specific item in BlogPost. This item is located based on specified params.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update controller method takes in a set of params based on user inputs and updates an item based on if the item is valid or not.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This command uses the route alias blog_post_path to redirect you to the portion of the application where you can find a valid item in the event the item you entered could not be found and destroyed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) A private method can only be called within the class that they are defined, in other words the method blog_post_params cannot be called outside of BlogPostsController, limiting it's impact to a particular set of methods.
  private
  def blog_post_params
    # ---10) This sets the content of the what must be included in blog_post_params, making it more difficult for malicious actors to enter SQL commands which could give them access to database items that they are not meant to have.
    params.require(:blog_post).permit(:title, :content)
  end
end
