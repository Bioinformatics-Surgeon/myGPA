const React = require('react');

class App extends React.Component {
  componentDidMount() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: [
          'Fall 2009',
          'Spring 2010',
          'Fall 2010',
          'Spring 2011',
          'Fall 2011',
          'Spring 2012',
          'Fall 2012',
          'Spring 2013',
          'Fall 2013',
          'Spring 2014',
          // 'Summer 2014',
          'Fall 2014',
          'Spring 2015',
          'Summer 2015',
          'Fall 2015',
          'Spring 2016',
          'Summer 2016',
          'Fall 2016',
          'Spring 2017'
        ],

        datasets: [
          {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            borderColor: 'rgb(255, 99, 132)',

            data: [
              2.1,
              2.21,
              3.5,
              1.6,
              1.33,
              3.0,
              2.3,
              2.63,
              3.0,
              2.22,
              // 0.0,
              2.83,
              3.12,
              2.25,
              2.25,
              3.22,
              4.0,
              2.16,
              2.72
            ]
          }
        ]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Semester vs Term GPA'
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 10,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        responsive: true,
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 0,
              endValue: 3.7259,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1,
              label: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 0.0)',
                borderColor: 'rgb(75, 192, 192)',
                content: 'Trendline',
                yAdjust: 0
              }
            }
          ]
        }
      }
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Cody Goss GPA analysis</h1>
          <p className='lead'>
            GPA is a common factor for judging whether or not a student will do
            well within a university level program. Most students who have
            higher GPA have great study habits, are good test takers, and are
            able to prioritize their time adequately.
          </p>
          <hr className='my-4' />
          <p>
            Early in my college career I didn’t know how to study, I was not
            focused, and I didn’t understand how to prepare for test. As time
            went on I learned the hard way how to do these things. The trendline
            below is a easy visualization of how as I grew as a student and as a
            person my GPA steadily increased. I learned how to prepare for test,
            I learn how I learn and how to study, and I learned how to
            prioritize work and school.{' '}
          </p>
          <a
            className='btn btn-primary btn-lg'
            target='_blank'
            href='https://www.linkedin.com/in/mudanic/'
            role='button'
          >
            Learn more
          </a>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <canvas id='myChart' />
            <p className='p-2 mt-4'>
              This chart shows my end of semester GPA plotted against time
            </p>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = App;
