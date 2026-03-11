import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import Card from './Card';

const ExperienceCard = ({ experience }) => {
  const { title, company, duration, responsibilities, technologies, achievements } = experience;

  return (
    <Card hoverable className="border-l-4 border-primary-600">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary-600/20 rounded-lg">
          <FaBriefcase className="text-2xl text-primary-500" aria-hidden="true" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-primary-400 font-medium mb-2">{company}</p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <FaCalendar className="text-xs" aria-hidden="true" />
            <span>{duration}</span>
          </div>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-primary-300">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
