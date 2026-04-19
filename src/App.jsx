import React, { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import DnsRounded from "@mui/icons-material/DnsRounded";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import GitHub from "@mui/icons-material/GitHub";
import LaunchRounded from "@mui/icons-material/LaunchRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import PictureAsPdfOutlined from "@mui/icons-material/PictureAsPdfOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import StorageRounded from "@mui/icons-material/StorageRounded";
import WorkOutline from "@mui/icons-material/WorkOutline";
import { portfolioData } from "./data/portfolioData";
import { getTheme } from "./theme";

const tabs = ["About", "Resume", "Portfolio", "Contact"];
const skillIcons = {
  Frontend: <CodeRounded fontSize="small" />,
  Backend: <StorageRounded fontSize="small" />,
  "Version Control & DevOps": <DnsRounded fontSize="small" />,
  "AI & Automation Tools": <AutoAwesomeRounded fontSize="small" />,
};

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 3 }} className="reveal-on-scroll reveal-delay-1">
      <Typography variant="h4" className="section-title">
        {children}
      </Typography>
      <Box className="section-accent" />
    </Box>
  );
}

function TimelineBlock({ icon, title, items }) {
  return (
    <Box sx={{ mb: 4 }} className="reveal-on-scroll reveal-delay-2">
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Box className="icon-shell">{icon}</Box>
        <Typography variant="h5">{title}</Typography>
      </Stack>
      <Box className="timeline-list">
        {items.map((item, index) => (
          <Box
            className={`timeline-item reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
            key={`${item.place}-${item.year}`}
          >
            <Typography variant="h6" sx={{ fontSize: 17, mb: 0.5 }}>
              {item.title}
            </Typography>
            <Typography className="timeline-meta">
              {item.place} | {item.year}
            </Typography>
            {item.bullets ? (
              <Box className="timeline-bullets">
                {item.bullets.map((bullet) => (
                  <Typography key={bullet} className="timeline-copy timeline-bullet">
                    • {bullet}
                  </Typography>
                ))}
              </Box>
            ) : (
              <Typography className="timeline-copy">{item.description}</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function SkillGroup({ title, items }) {
  return (
    <Box className="skill-group reveal-on-scroll reveal-delay-2">
      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.5 }}>
        <Box className="skill-group-icon">{skillIcons[title]}</Box>
        <Typography variant="h6" className="skill-group-title">
          {title}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {items.map((item) => (
          <Chip key={item} label={item} className="skill-chip compact-skill-chip" />
        ))}
      </Stack>
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Paper className="project-card reveal-on-scroll reveal-delay-2">
      <Box className="project-image-wrap">
        <img className="project-image" src={project.image} alt={project.name} />
        <Box className="project-overlay">
          {project.liveUrl ? (
            <IconButton
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-icon-button"
            >
              <LaunchRounded />
            </IconButton>
          ) : null}
          {project.githubUrl ? (
            <IconButton
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-icon-button"
            >
              <GitHub />
            </IconButton>
          ) : null}
        </Box>
      </Box>
      <Box sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {project.name}
        </Typography>
        <Typography className="project-year">{project.year}</Typography>
        <Typography className="project-description">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" className="project-chip" />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}

function App() {
  const [tab, setTab] = useState(0);
  const [mode, setMode] = useState("dark");
  const profileInitials = useMemo(
    () =>
      portfolioData.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2),
    [],
  );
  const theme = useMemo(() => getTheme(mode), [mode]);
  const hireMeLink = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
    "Junior Software Engineer Opportunity",
  )}&body=${encodeURIComponent(
    `Hi Siyabonga,\n\nI came across your portfolio and would like to discuss a junior software engineer opportunity with you.\n`,
  )}`;

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [tab]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell" data-theme={mode}>
        <Box className="opportunity-banner">
          Open to junior software engineer opportunities
        </Box>
        <Button
          component="a"
          href={hireMeLink}
          className="hire-me-button"
          variant="contained"
        >
          Hire Me
        </Button>
        <Container maxWidth="xl" sx={{ py: { xs: 10, md: 12 } }}>
          <Box className="portfolio-layout">
          <Paper className="sidebar-card reveal-on-scroll is-visible">
            <Stack spacing={3} alignItems="center">
              <Avatar
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                sx={{
                  width: 140,
                  height: 140,
                  border: "3px solid rgba(211, 175, 91, 0.4)",
                  bgcolor: "rgba(211, 175, 91, 0.18)",
                  fontSize: 42,
                  fontWeight: 700,
                }}
              >
                {profileInitials}
              </Avatar>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {portfolioData.name}
                </Typography>
                <Box className="role-pill">{portfolioData.title}</Box>
              </Box>

              <IconButton
                onClick={() =>
                  setMode((currentMode) =>
                    currentMode === "dark" ? "light" : "dark",
                  )
                }
                className="theme-toggle"
                aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              >
                {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
              </IconButton>

              <Divider flexItem sx={{ borderColor: "rgba(211, 175, 91, 0.18)" }} />

              <Stack spacing={2} sx={{ width: "100%" }}>
                <Stack direction="row" spacing={2}>
                  <Box className="icon-shell">
                    <EmailOutlined fontSize="small" />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography className="contact-label">Email</Typography>
                    <Link href={`mailto:${portfolioData.email}`} underline="hover">
                      {portfolioData.email}
                    </Link>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box className="icon-shell">
                    <PhoneOutlined fontSize="small" />
                  </Box>
                  <Box>
                    <Typography className="contact-label">Phone</Typography>
                    <Typography color="text.secondary">{portfolioData.phone}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box className="icon-shell">
                    <LocationOnOutlined fontSize="small" />
                  </Box>
                  <Box>
                    <Typography className="contact-label">Location</Typography>
                    <Typography color="text.secondary">{portfolioData.location}</Typography>
                  </Box>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <IconButton
                  component="a"
                  href={portfolioData.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                  aria-label="Open LinkedIn profile"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href={portfolioData.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                  aria-label="Open GitHub profile"
                >
                  <GitHub />
                </IconButton>
              </Stack>

              <Button
                fullWidth
                size="large"
                startIcon={<PictureAsPdfOutlined />}
                variant="contained"
                href={portfolioData.cv.href}
                download={portfolioData.cv.downloadName}
                target="_blank"
                rel="noreferrer"
                className="cv-button"
              >
                Download Resume
              </Button>
            </Stack>
          </Paper>

          <Paper className="content-card reveal-on-scroll is-visible">
            <Tabs
              value={tab}
              onChange={(_, nextValue) => setTab(nextValue)}
              variant="scrollable"
              allowScrollButtonsMobile
              sx={{ mb: 4 }}
            >
              {tabs.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>

            {tab === 0 ? (
              <Box className="reveal-on-scroll reveal-delay-1">
                <SectionTitle>About Me</SectionTitle>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 4 }} className="reveal-on-scroll reveal-delay-2">
                    <Box
                      component="img"
                      src={portfolioData.aboutImage}
                      alt={portfolioData.name}
                      className="about-image"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }} className="reveal-on-scroll reveal-delay-3">
                    <Stack spacing={2.2}>
                      {portfolioData.about.map((paragraph) => (
                        <Typography key={paragraph} className="body-copy">
                          {paragraph}
                        </Typography>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            ) : null}

            {tab === 1 ? (
              <Box className="reveal-on-scroll reveal-delay-1">
                <SectionTitle>Resume</SectionTitle>
                <TimelineBlock
                  icon={<WorkOutline fontSize="small" />}
                  title="Experience"
                  items={portfolioData.experience}
                />
                <TimelineBlock
                  icon={<SchoolOutlined fontSize="small" />}
                  title="Education"
                  items={portfolioData.education}
                />
                <Box className="reveal-on-scroll reveal-delay-2">
                  <Typography variant="h5" sx={{ mb: 2.5 }}>
                    Tech Stack
                  </Typography>
                  <Box className="skills-grid">
                    {portfolioData.skillGroups.map((group) => (
                      <SkillGroup
                        key={group.title}
                        title={group.title}
                        items={group.items}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            ) : null}

            {tab === 2 ? (
              <Box className="reveal-on-scroll reveal-delay-1">
                <SectionTitle>Portfolio</SectionTitle>
                <Typography className="body-copy" sx={{ mb: 3 }}>
                  Projects are separated into client work and personal builds, while
                  keeping the same visual style as the reference portfolio.
                </Typography>

                <Typography variant="h5" sx={{ mb: 2.5 }} className="reveal-on-scroll reveal-delay-2">
                  Client Projects
                </Typography>
                <Box className="project-grid">
                  {portfolioData.clientProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </Box>

                <Typography
                  variant="h5"
                  sx={{ mt: 5, mb: 2.5 }}
                  className="reveal-on-scroll reveal-delay-2"
                >
                  Personal Projects
                </Typography>
                <Box className="project-grid">
                  {portfolioData.personalProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </Box>
              </Box>
            ) : null}

            {tab === 3 ? (
              <Box className="reveal-on-scroll reveal-delay-1">
                <SectionTitle>Contact</SectionTitle>
                <Stack spacing={2.5} className="reveal-on-scroll reveal-delay-2">
                  <Typography className="body-copy">
                    I'm open to freelance work, team opportunities, and interesting
                    product collaborations.
                  </Typography>
                  <Link href={`tel:${portfolioData.phone}`} className="contact-link-large">
                    {portfolioData.phone}
                  </Link>
                  <Link href={`mailto:${portfolioData.email}`} className="contact-link-large">
                    {portfolioData.email}
                  </Link>
                  <Link
                    href={portfolioData.socials[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link-large"
                  >
                    {portfolioData.socials[0].href}
                  </Link>
                  <Link
                    href={portfolioData.socials[1].href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link-large"
                  >
                    {portfolioData.socials[1].href}
                  </Link>
                  <Typography color="text.secondary">{portfolioData.location}</Typography>
                </Stack>
              </Box>
            ) : null}
          </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
