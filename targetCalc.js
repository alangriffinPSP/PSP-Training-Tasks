//TO DO:
//Second use after 'Reset' shows old results!
//Check conventions for naming functions/variables/objects
//Add +/- percentage calculation
//"Do you know your sales deficit?" option. Hide inputs if unnecessary


$(document).ready(function () {

    const calculator = {
        calculate() {

            // const inputs = {
            //     target: 0,
            //     actual: 0,
            //     weeks: 0
            // };
            // const results = {
            //     deficit: 0,
            //     week: 0,
            //     day: 0,
            //     hour: 0
            // };
            const inputs = {
            target: $('#target').val(),
            actual: $('#actual').val(),
            weeks: $('#weeks').val()
            }

            if (!inputs.target || !inputs.weeks || !inputs.actual) {
                return;
            }


            //broke it!
            const results = {
            deficit: Math.round(inputs.target - inputs.actual),
            week: Math.round(this.deficit / inputs.weeks),  //NaN
            day: Math.round(this.week / 7), //NaN
            hour: Math.round(this.week / 57)    //NaN
            //Based on 9:30-17:30 Mon-Fri & 10:00-16:00 Sunday. Add time options later?
            }

            if (results.deficit > 0) {
                $('#calculateButton').css('display', 'none');
                $('#results').css('display', 'inline-block');
                $('#deficit').replaceWith(` £${results.deficit} `);
                $('#weeksLeft').replaceWith(` ${inputs.weeks} `);
                $('#targetWeek').replaceWith(`£${results.week} Per Week`);
                $('#targetDay').replaceWith(`£${results.day} Per Day`);
                $('#targetHour').replaceWith(`£${results.hour} Per Hour`);
                console.log(inputs, results);
            } else {
                $('#congrats').css('display', 'inline-block')
                $('#calculateButton').css('display', 'none');
            }
        },

        calculateClickListener() {
            $('#calculateButton').click(this.calculate)
        }
    }
    calculator.calculateClickListener();


    const pageElements = {
        $clearForm() {
            $('#inputs').trigger('reset');
            $('#calculateButton').css('display', 'inline');
            $('#congrats').css('display', 'none');
            $('#results').css('display', 'none');
        },

        $resetClickListener() {
            $('#resetButton').click(this.$clearForm);
        }
    }
    pageElements.$resetClickListener();

    pageElements.$clearForm();
    //Document end
});