const React = require('react');
const chart = require('chart.js');
const annotation = require('chartjs-plugin-annotation');

class App extends React.Component {
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
          <div className='row'>
            <div className='col'>
              <p>
                Click the "Learn more" to visit my Linkedin and learn more about
                my progress since graduating.
              </p>
            </div>
            <div className='col'>
              <p>
                Click the "My portfolio" to see my portfolio and see some of the
                projects I have worked on.
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <a
                className='btn btn-primary btn-lg'
                target='_blank'
                href='https://www.linkedin.com/in/mudanic/'
                role='button'
              >
                Learn more
              </a>
            </div>
            <div className='col'>
              <a
                className='btn btn-primary btn-lg'
                target='_blank'
                href='https://www.mudanic.com/'
                role='button'
              >
                My portfolio
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center flex-column'>
            <div className='col p-0 center'>
              <img
                src='https://res.cloudinary.com/moodyappcloudname/image/upload/v1560474841/chartGPA.png'
                alt='chart'
                width='500px'
                height='500px'
              />
            </div>
            <h5 className='p-2'>
              This chart shows my end of semester GPA plotted against time
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = App;
