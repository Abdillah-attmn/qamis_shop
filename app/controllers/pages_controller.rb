class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @products = Product.all.limit(10)
  end
end
