class ProductsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[show index]
  before_action :set_product, only: %i[show]

  def index
    @products = Product.all
    @products = @products.where(category: params[:category]) if params[:category].present?
  end

  def show
    @products = Product.where(category: @product.category)
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
