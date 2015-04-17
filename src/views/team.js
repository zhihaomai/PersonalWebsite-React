/* Team Page
 * ---------
 */

var React = require('react');

var Header = require('./header');
var TeamMember = require('./TeamMember');
var Footer = require('./footer');

var Team = React.createClass({

  render: function() {
    return (
      <div className="teamPage">
        <Header />
        <div className="content">
          <div className="pure-g teamGrid">
              <TeamMember 
                name="Mai"
                src="../team/mai_dp.jpg"
                role="President and Founder"
                desc="Known by many as 'shotcalla' aka
                'diamondkilla' aka 'playmaka', Mai has
                thrived in whatever role necessary."/>
              <TeamMember 
                name="Lam"
                src="../team/gina_dp.jpg"
                role="Chief Operations Officer"
                desc="Named Top 100 Most Influential People
                on Earth, Lam has broken records and barriers
                on her way to the top."/>
              <TeamMember 
                name="Bedi"
                src="../team/bedi_dp.jpg"
                role="Chief Technical Officer"
                desc="The founder of OmniJS, Mintr, Trade App,
                and Playtube, Bedi is an absolute
                legend in the tech world."/>
              <TeamMember 
                name="Chiu"
                src="../team/chiu_dp.jpg"
                role="Chief Financial Officer"
                desc="Started as an RPG game developer, Chiu
                went into finance after selling his own RPG
                for 14 million dollars."/>
              <TeamMember 
                name="Liao"
                src="../team/liao_dp.jpg"
                role="VP, Marketing & Global Operations"
                desc="Sold his lemonade business for 4 million dollars
                at the age of 10, Liao was bred for this opportunity in marketing."/>
              <TeamMember 
                name="Pham"
                src="../team/pham_dp.jpg"
                role="VP, Director of Engineering"
                desc="MMA fighter who ended his career early
                due to a lack of competition in the sport, Pham has now found
                a worthy challenge as the director of engineering."/>
             <TeamMember 
                name="Tam"
                src="../team/tam_dp.jpg"
                role="VP, Director of Design"
                desc="Known for his exotic tastes, Tam also 
                shadows as the company representative
                at the Pokemon World Championships every year."/>
              <TeamMember 
                name="Chan"
                src="../team/chan_dp.jpg"
                role="VP, Quality Assurance"
                desc="Guiness World Record holder for worst arachnophobia,
                Chan ensures products and services are delivered moist and well."/>
              <TeamMember 
                name="Grewal"
                src="../team/grewal_dp.jpg"
                role="VP, Finance & Accounting"
                desc="Co-founder of the Garden Guru, Grewal cuts
                budgets and expenses as well as he did bushes and scrubs."/>
              <TeamMember 
                name="Ng"
                src="../team/ng_dp.jpg"
                role="VP, Business Development"
                desc="After three ups and downs, Ng has blossomed
                into a business mogul, thirtsy for the blood of competitors."/>
              <TeamMember 
                name="Siu"
                src="../team/siu_dp.jpg"
                role="VP, Growth & Advertising"
                desc="Spent 3 years in the Jungle of Summoner's Rift,
                Siu has emerged as a top talent in terms of company growth"/>
              <TeamMember 
                name="Lo"
                src="../team/lo_dp.jpg"
                role="Director of Human Resources"
                desc="Never one to shy away from conflict, Lo has been
                known to use unorthodox methods to solve problems in the worldplace."/>
          </div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Team;