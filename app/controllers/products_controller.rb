class ProductsController < ApplicationController
  before_action :set_products, only: %i[show]

  def index
    @products = Product.all
  end

  def show;end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
