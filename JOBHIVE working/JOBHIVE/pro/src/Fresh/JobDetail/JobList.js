// import "./JobList.css";
// import Apply from "../../Apply";
// import JobCard from "./JobCard";
// import React, { useEffect, useState } from "react";

// const JobList = () => {
//     const [jobs, setJobs] = useState([]);
//     const [filters, setFilters] = useState({
//         keyword: '',
//         location: '',
//         workmode: '',  
//         salaryRange: { min: 0, max: 50000 },
//         jobTypes: new Set()  
//     });
//     const [filteredJobs, setFilteredJobs] = useState([]);
//     const [selectedJob, setSelectedJob] = useState(null);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch("http://localhost:8080/jobs");
//                 const data = await response.json();
//                 setJobs(data);
//                 setFilteredJobs(data); 
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//             }
//         };

//         fetchJobs();
//     }, []);

//     useEffect(() => {
//         filterJobs();
//     }, [filters]);

//     const handleFilterChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (type === "checkbox") {
//             setFilters((prevFilters) => {
//                 const updatedJobTypes = new Set(prevFilters.jobTypes);
//                 if (checked) {
//                     updatedJobTypes.add(value);
//                 } else {
//                     updatedJobTypes.delete(value);
//                 }
//                 return {
//                     ...prevFilters,
//                     jobTypes: updatedJobTypes
//                 };
//             });
//         } else {
//             setFilters((prevFilters) => ({
//                 ...prevFilters,
//                 [name]: type === 'checkbox' ? checked : value,
//             }));
//         }
//     };

//     const filterJobs = () => {
//         let filtered = jobs;

//         if (filters.keyword) {
//             filtered = filtered.filter(job =>
//                 job.jobTitle.toLowerCase().includes(filters.keyword.toLowerCase()) ||
//                 job.jobDescription.toLowerCase().includes(filters.keyword.toLowerCase())
//             );
//         }

//         if (filters.location) {
//             filtered = filtered.filter(job =>
//                 job.location.toLowerCase().includes(filters.location.toLowerCase())
//             );
//         }

//         if (filters.workmode) {
//             filtered = filtered.filter(job =>
//                 job.workmode && job.workmode.toLowerCase() === filters.workmode.toLowerCase()
//             );
//         }

//         if (filters.jobTypes.size > 0) {
//             filtered = filtered.filter(job => filters.jobTypes.has(job.jobType));
//         }

//         if (filters.salaryRange.min || filters.salaryRange.max) {
//             filtered = filtered.filter(job => {
//                 const [minSalary, maxSalary] = job.salary.split('-').map(Number);
//                 return (
//                     minSalary >= filters.salaryRange.min &&
//                     maxSalary <= filters.salaryRange.max
//                 );
//             });
//         }

//         setFilteredJobs(filtered);
//     };

//     const handleApplyClick = (job) => {
//         setSelectedJob(job);
//     };

//     const closeForm = () => {
//         setSelectedJob(null);
//     };

//     return (
//         <div className="job-list-container">
//             <div className="filters">
//                 <h3>Filter Jobs</h3>
//                 <div>
//                     <label>
//                         Keyword:
//                         <input 
//                             type="text" 
//                             name="keyword" 
//                             value={filters.keyword} 
//                             onChange={handleFilterChange} 
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Location:
//                         <input 
//                             type="text" 
//                             name="location" 
//                             value={filters.location} 
//                             onChange={handleFilterChange} 
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Remote:
//                         <input 
//                             type="checkbox" 
//                             name="workmode" 
//                             value="Remote"
//                             checked={filters.workmode === "Remote"} 
//                             onChange={handleFilterChange} 
//                         />
//                     </label>
//                     <label>
//                         Onsite:
//                         <input 
//                             type="checkbox" 
//                             name="workmode" 
//                             value="Onsite"
//                             checked={filters.workmode === "Onsite"} 
//                             onChange={handleFilterChange} 
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label>Job Type:</label>
//                     <div>
//                         <label>
//                             <input 
//                                 type="checkbox" 
//                                 value="Full Time" 
//                                 onChange={handleFilterChange} 
//                                 checked={filters.jobTypes.has('Full Time')}
//                             />
//                             Full Time
//                         </label>
//                         <label>
//                             <input 
//                                 type="checkbox" 
//                                 value="Part Time" 
//                                 onChange={handleFilterChange} 
//                                 checked={filters.jobTypes.has('Part Time')}
//                             />
//                             Part Time
//                         </label>
//                         <label>
//                             <input 
//                                 type="checkbox" 
//                                 value="Internship" 
//                                 onChange={handleFilterChange} 
//                                 checked={filters.jobTypes.has('Internship')}
//                             />
//                             Internship
//                         </label>
//                         <label>
//                             <input 
//                                 type="checkbox" 
//                                 value="Contract" 
//                                 onChange={handleFilterChange} 
//                                 checked={filters.jobTypes.has('Contract')}
//                             />
//                             Contract
//                         </label>
//                     </div>
//                 </div>
//                 <div>
//                     <label>
//                         Salary Range: 
//                         <input 
//                             type="number" 
//                             name="salaryRangeMin" 
//                             value={filters.salaryRange.min} 
//                             onChange={(e) => handleFilterChange({ target: { name: 'salaryRange', value: { ...filters.salaryRange, min: Number(e.target.value) } } })} 
//                         />
//                         -
//                         <input 
//                             type="number" 
//                             name="salaryRangeMax" 
//                             value={filters.salaryRange.max} 
//                             onChange={(e) => handleFilterChange({ target: { name: 'salaryRange', value: { ...filters.salaryRange, max: Number(e.target.value) } } })} 
//                         />
//                     </label>
//                 </div>
//             </div>
//             <div className="job-list">
//                 {filteredJobs.map(job => (
//                     <JobCard key={job.id} job={job} onApplyClick={() => handleApplyClick(job)} />
//                 ))}
//             </div>
//             {selectedJob && <Apply job={selectedJob} closeForm={closeForm} />}
//         </div>
//     );
// };

// export default JobList;

import "./JobList.css";
import Apply from "../../Apply";
import JobCard from "./JobCard";
import React, { useEffect, useState } from "react";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({
        keyword: '',
        location: '',
        workmode: '',  
        salaryRange: { min: 0, max: 50000 },
        jobTypes: new Set()  
    });
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:8080/jobs");
                const data = await response.json();
                setJobs(data);
                setFilteredJobs(data); 
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        filterJobs();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFilters((prevFilters) => {
                const updatedJobTypes = new Set(prevFilters.jobTypes);
                if (checked) {
                    updatedJobTypes.add(value);
                } else {
                    updatedJobTypes.delete(value);
                }
                return {
                    ...prevFilters,
                    jobTypes: updatedJobTypes
                };
            });
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const filterJobs = () => {
        let filtered = jobs;

        if (filters.keyword) {
            filtered = filtered.filter(job =>
                job.jobTitle.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.jobDescription.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        }

        if (filters.location) {
            filtered = filtered.filter(job =>
                job.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        if (filters.workmode) {
            filtered = filtered.filter(job =>
                job.workmode && job.workmode.toLowerCase() === filters.workmode.toLowerCase()
            );
        }

        if (filters.jobTypes.size > 0) {
            filtered = filtered.filter(job => filters.jobTypes.has(job.jobType));
        }

        if (filters.salaryRange.min || filters.salaryRange.max) {
            filtered = filtered.filter(job => {
                const [minSalary, maxSalary] = job.salary.split('-').map(Number);
                return (
                    minSalary >= filters.salaryRange.min &&
                    maxSalary <= filters.salaryRange.max
                );
            });
        }

        setFilteredJobs(filtered);
    };

    const handleApplyClick = (job) => {
        setSelectedJob(job);
    };

    const closeForm = () => {
        setSelectedJob(null);
    };

    return (
        <div className="job-list-container">
            <div className="filters">
                <h3>Filter Jobs</h3>
                <div>
                    <label>
                        Keyword:
                        <input 
                            type="text" 
                            name="keyword" 
                            value={filters.keyword} 
                            onChange={handleFilterChange} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Location:
                        <input 
                            type="text" 
                            name="location" 
                            value={filters.location} 
                            onChange={handleFilterChange} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Remote:
                        <input 
                            type="checkbox" 
                            name="workmode" 
                            value="Remote"
                            checked={filters.workmode === "Remote"} 
                            onChange={handleFilterChange} 
                        />
                    </label>
                    <label>
                        Onsite:
                        <input 
                            type="checkbox" 
                            name="workmode" 
                            value="Onsite"
                            checked={filters.workmode === "Onsite"} 
                            onChange={handleFilterChange} 
                        />
                    </label>
                </div>
                <div>
                    <label>Job Type:</label>
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Full Time" 
                                onChange={handleFilterChange} 
                                checked={filters.jobTypes.has('Full Time')}
                            />
                            Full Time
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Part Time" 
                                onChange={handleFilterChange} 
                                checked={filters.jobTypes.has('Part Time')}
                            />
                            Part Time
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Internship" 
                                onChange={handleFilterChange} 
                                checked={filters.jobTypes.has('Internship')}
                            />
                            Internship
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Contract" 
                                onChange={handleFilterChange} 
                                checked={filters.jobTypes.has('Contract')}
                            />
                            Contract
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                        Salary Range: 
                        <input 
                            type="number" 
                            name="salaryRangeMin" 
                            value={filters.salaryRange.min} 
                            onChange={(e) => handleFilterChange({ target: { name: 'salaryRange', value: { ...filters.salaryRange, min: Number(e.target.value) } } })} 
                        />
                        -
                        <input 
                            type="number" 
                            name="salaryRangeMax" 
                            value={filters.salaryRange.max} 
                            onChange={(e) => handleFilterChange({ target: { name: 'salaryRange', value: { ...filters.salaryRange, max: Number(e.target.value) } } })} 
                        />
                    </label>
                </div>
            </div>
            <div className="job-list">
                {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onApplyClick={() => handleApplyClick(job)} />
                ))}
            </div>
            {selectedJob && <Apply job={selectedJob} closeForm={closeForm} />}
        </div>
    );
};

export default JobList;