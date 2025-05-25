"use client";
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

const educationEntries: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'M.S, Department of Psychology',
    institution: 'University of Chittagong',
    location: 'Chittagong',
    period: '2023 (Appeared)',
  },
  {
    id: 'edu2',
    degree: 'B.Sc, Department of Psychology',
    institution: 'University of Chittagong',
    location: 'Chittagong',
    period: '2022',
    gpa: '3.55 / 4.00',
  },
  {
    id: 'edu3',
    degree: 'Higher Secondary Certificate (H.S.C)',
    institution: 'Rangpur Govt. College',
    location: 'Rangpur',
    period: '2017',
    gpa: '4.83 / 5.00',
  },
  {
    id: 'edu4',
    degree: 'Secondary School Certificate (S.S.C)',
    institution: 'Rangpur Zilla School',
    location: 'Rangpur',
    period: '2015',
    gpa: '5.00 / 5.00',
  },
];

const EducationSection = () => (
  <section id="education" className="py-10 sm:py-12 bg-white text-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          My <span className="text-teal-500">Education</span>
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          A snapshot of my academic background and achievements.
        </p>
      </div>
      <VerticalTimeline lineColor="#14b8a6">
        {educationEntries.map((edu) => (
          <VerticalTimelineElement
            key={edu.id}
            contentStyle={{
              background: '#fff',
              color: '#0f172a',
              borderTop: '4px solid #14b8a6',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
              padding: '14px 18px',
              minHeight: '60px',
            }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            iconStyle={{
              background: '#14b8a6',
              color: '#fff',
              boxShadow: '0 0 0 4px #fff, 0 2px 4px 0 rgba(0,0,0,0.05)',
            }}
            icon={
              <svg
                className="w-5 h-5 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
              </svg>
            }
          >
            <h3 className="text-base font-semibold text-teal-600 mb-1">
              {edu.degree}
            </h3>
            <p className="text-sm font-medium text-gray-800 mb-0.5">
              {edu.institution}, {edu.location}
            </p>
            <p className="text-xs text-gray-500 mb-0.5">{edu.period}</p>
            {/* {edu.gpa && (
              <p className="text-xs text-gray-700 font-semibold mb-0">
                GPA: {edu.gpa}
              </p>
            )} */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default EducationSection;