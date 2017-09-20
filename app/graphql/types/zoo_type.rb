Types::ZooType = GraphQL::ObjectType.define do
  name "Zoo"
  description "You go to the zoo to see animals."

  field :id, !types.ID
  field :name, !types.String
  field :animals, types[Types::AnimalType] do
    argument :limit, types.Int
    resolve ->(object, args, ctx) {
      animals = object.animals
      animals = animals.limit(args[:limit]) if args[:limit]
      animals
    }
  end
end
