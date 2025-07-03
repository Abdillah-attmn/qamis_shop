class ProductsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[show]
  before_action :set_product, only: %i[show]

  def index
    @products = Product.all
  end

  def show;end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
