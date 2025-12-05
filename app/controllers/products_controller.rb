class ProductsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[show index]
  before_action :set_product, only: %i[show]

  def index
    @products = Product.all

    # Filtre Catégorie
    @products = @products.where(category: params[:categories]) if params[:categories].present?

    # Filtre Prix
    @products = @products.where("price >= ?", params[:min_price]) if params[:prices].present?
    @products = @products.where("price <= ?", params[:max_price]) if params[:prices].present?

    respond_to do |format|
      format.html # vue normale
      format.turbo_stream # mise à jour via turbo_frame
    end
  end

  def show
    @products = Product.where(category: @product.category)
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
