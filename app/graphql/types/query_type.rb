Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of the schema."

  field :zoo do
    type Types::ZooType
    argument :id, !types.ID
    description "Get a Zoo by ID"
    resolve ->(obj, args, ctx) { Zoo.find(args["id"]) }
  end

  # TODO: remove me
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end
end
