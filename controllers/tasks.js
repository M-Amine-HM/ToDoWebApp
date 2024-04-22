const Task = require("../models/tasks");

module.exports = {

    index:

        function (req, res) {
            Task.find({})
                .then(tasks => {
                    res.render("todo.ejs", { todotasks: tasks });
                })
                .catch(error => {
                    console.log(`There is an error: ${error}`);

                });

        },



    create: function (req, res) {

        const firstTask = new Task({ title: req.body.title });

        firstTask.save().then(() => res.redirect("/"));


    },



    edit: (req, res) => {
        const id = req.params.id;

        Task.find({})
            .then(tasks => {
                res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
            })
            .catch(error => {
                console.log(`There is an error: ${error}`);

            });


    },



    update: (req, res) => {
        const id = req.params.id;

        Task.findByIdAndUpdate(id, { title: req.body.title }, { new: true })
            .then(updatedTask => {
                console.log('Updated document:', updatedTask);
                res.redirect("/");
            })
            .catch(error => {
                console.log(`There is an error: ${error}`);
                // Handle the error, send an error page, or respond in some appropriate way
                res.status(500).send(error); // Sending an error response with status code 500
            });


    },



    delete:
        (req, res) => {

            Task.deleteOne({ _id: req.params.id }).then(tasks => {
                console.log('Updated document:', tasks);
                res.redirect("/");
            })
                .catch(error => {
                    console.log(`There is an error: ${error}`);
                    // Handle the error, send an error page, or respond in some appropriate way
                });

        }

}