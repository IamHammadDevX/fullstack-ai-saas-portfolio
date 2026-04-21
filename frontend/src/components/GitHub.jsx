import React from 'react';
import { githubStats } from '../mock';
import { Card, CardContent } from './ui/card';
import { Activity, GitBranch, GitCommit, Sparkles, Star, TrendingUp } from 'lucide-react';

const GitHub = () => {
  const stats = [
    { label: 'Repositories', value: githubStats.totalRepos, icon: GitBranch },
    { label: 'Total Commits', value: githubStats.totalCommits, icon: GitCommit },
    { label: 'Stars Earned', value: githubStats.totalStars, icon: Star },
    { label: 'Active Days', value: githubStats.activeDays, icon: Activity }
  ];

  return (
    <section id="github" className="section-shell section-shell--muted relative overflow-hidden">
      <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
      <div className="absolute right-[6%] bottom-10 h-72 w-72 rounded-full bg-teal-300/15 blur-3xl dark:bg-teal-500/10" />

      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">GitHub Activity</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            Consistent contributions and open-source engagement
          </h2>
          <p className="section-copy mx-auto">
            A snapshot of how I build, iterate, and stay active across product work, engineering systems, and code shipped in public.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="glass-card overflow-hidden rounded-[2.25rem] border-0">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 p-6 text-white sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.16),transparent_30%)]" />
                <div className="relative z-10">
                  <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                    <Sparkles size={14} />
                    Shipping in Public
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight min-[420px]:text-3xl sm:text-4xl">
                        Real engineering momentum, not vanity numbers.
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        I use GitHub as a working system for building features, iterating on architecture, and maintaining quality across product, freelance, and internal engineering work.
                      </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Current Streak
                      </div>
                      <div className="mt-3 text-3xl font-bold text-white min-[420px]:text-4xl">
                        {githubStats.contributionStreak}
                        <span className="ml-2 text-lg font-semibold text-cyan-200">days</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-300">
                        <TrendingUp size={16} />
                        Active, consistent, and still growing
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 min-[430px]:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;

                      return (
                        <div
                          key={index}
                          className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                            <IconComponent size={22} />
                          </div>
                          <div className="mt-5 text-3xl font-bold text-white">{stat.value}</div>
                          <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            <Card className="surface-card rounded-[2.25rem] border-0 overflow-hidden">
              <CardContent className="p-6 sm:p-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                      Language Mix
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                      Top Languages
                    </h3>
                  </div>
                  <div className="w-fit rounded-2xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <GitBranch size={22} />
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {githubStats.topLanguages.map((lang, index) => (
                    <div key={index} className="rounded-[1.25rem] bg-slate-50/80 p-4 dark:bg-slate-900/60">
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                        <span className="font-semibold text-slate-500 dark:text-slate-400">{lang.percentage}%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 transition-all duration-500"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[2.25rem] border-0">
              <CardContent className="p-6 sm:p-10">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  Contribution Style
                </div>
                <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                  Clean commits, steady output, product-first execution.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  My contribution pattern reflects how I work overall: consistent delivery, iterative improvement, and shipping features that support real users and real business needs.
                </p>

                <div className="mt-8 grid gap-4 min-[430px]:grid-cols-2 sm:grid-cols-3">
                  {[
                    { label: 'Build Rhythm', value: 'Weekly' },
                    { label: 'Focus Area', value: 'Systems + UX' },
                    { label: 'Approach', value: 'Ship Fast' }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.35rem] border border-slate-200/70 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/60"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {item.label}
                      </div>
                      <div className="mt-3 text-lg font-bold text-slate-950 dark:text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
