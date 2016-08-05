class Restaurant
  include Mongoid::Document

  field :restaurant_name
  field :locality
  field :address
  field :cuisines
  field :hours
end
