require_relative 'src/works_collection'
require_relative 'src/photos_collection'

file = File.new('works_collection.js', 'w')

class Work
  attr_accessor :photos
  def initialize(params)
    @params = params
    @photos = params[:photos]
  end

  def method_missing(method, *args)
    super if !@params[method.to_sym]
    @params[method.to_sym]
  end

  def to_s
    <<-js
      _id: '#{@params[:_id]}'
    js

  end
end
# Photo = Struct.new(:filepath, :type, :work_id)

@works = @works_collection.map { |work_data| Work.new(work_data) }
# @photos_collection.each do |photo_data|
#   p = Photo.new(photo_data)
#   w = @works.find { |w| w._id == p.work_id }
#   if p.type == 'main'
#     w.photo_main = p.filepath
#   elsif p.type == 'thumb'
#     w.photo_thumb = p.filepath
#   elsif p.type == 'detail'
#     w.photos << p.filepath
#   end
# end

@works.each do |work|
  work.photos.unshift(work.photo_main)
  p work.photos
  file.puts(work)
end

p @works.length
# p @photos.length