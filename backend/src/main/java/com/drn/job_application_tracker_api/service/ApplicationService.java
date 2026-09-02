package com.drn.job_application_tracker_api.service;

import com.drn.job_application_tracker_api.exception.ResourceNotFoundException;
import com.drn.job_application_tracker_api.model.Application;
import com.drn.job_application_tracker_api.model.ApplicationStatus;
import com.drn.job_application_tracker_api.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Optional<Application> getApplicationById(Long id) {
        return applicationRepository.findById(id);
    }

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public Application updateApplication(Long id, Application updatedApplication) {
        Application existing = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id" + id));

        existing.setJobTitle(updatedApplication.getJobTitle());
        existing.setCompany(updatedApplication.getCompany());
        existing.setLocation(updatedApplication.getLocation());
        existing.setJobType(updatedApplication.getJobType());
        existing.setWorkSetup(updatedApplication.getWorkSetup());
        existing.setStatus(updatedApplication.getStatus());
        existing.setApplicationDate(updatedApplication.getApplicationDate());
        existing.setJobUrl(updatedApplication.getJobUrl());
        existing.setCompanyUrl(updatedApplication.getCompanyUrl());
        existing.setNotes(updatedApplication.getNotes());

        return applicationRepository.save(existing);
    }

    public Application updateStatus(Long id, ApplicationStatus newStatus) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + id));
        application.setStatus(newStatus);
        return applicationRepository.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }

}
