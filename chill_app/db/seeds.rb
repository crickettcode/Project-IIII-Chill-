# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{username:'Little William' email:'imprettyswag@ga.com' dob:'September, 29, 1997' gender:lizardman height:75 weight:160}])
day_one= Journal_entries.create([{date:'May, 31, 2018' paragraph_entry:"No this is your job, you are supposed to surprise me. *Explitive* Oh my god, that is not a dry erase marker. 
    Today has been a fairly uneventful day. I don't care, stop asking me. 
    Hot tub pizza party. Sour Dinosaur. Nintendo. Dungeons and Dragons. I hate CSS. "}])
    check_in_one = Check_in.create({time_of_day:'morning'mood:3 hunger:7 energy:9 physical:8 mental:7 motivated:8 grateful:9 supported:2})