import React from 'react';
import { githubStats } from '../mock';
import { Card, CardContent } from './ui/card';
import { GitBranch, Star, GitCommit, Activity } from 'lucide-react';

const GitHub = () => {
  const stats = [
    { label: 'Repositories', value: githubStats.totalRepos, icon: GitBranch },
    { label: 'Total Commits', value: githubStats.totalCommits, icon: GitCommit },
    { label: 'Stars Earned', value: githubStats.totalStars, icon: Star },
    { label: 'Active Days', value: githubStats.activeDays, icon: Activity }
  ];

  return (
    <section id="github" className="section-shell">
      <div className="section-container">
        <div className="mb-12 text-center sm:mb-16">
          <span className="section-kicker">GitHub</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            GitHub Activity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Consistent contributions and open-source engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="surface-card rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <IconComponent className="mb-3 text-cyan-600 dark:text-cyan-300" size={24} />
                    <div className="mb-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">{stat.value}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="surface-card rounded-[2rem] border">
            <CardContent className="pt-6">
              <h3 className="mb-6 text-lg font-bold text-slate-950 dark:text-white sm:text-xl">Top Languages</h3>
              <div className="space-y-4">
                {githubStats.topLanguages.map((lang, index) => (
                  <div key={index}>
                    <div className="mb-2 flex justify-between text-xs sm:text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{lang.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">Current Streak</span>
                  <span className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                    {githubStats.contributionStreak} days
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
