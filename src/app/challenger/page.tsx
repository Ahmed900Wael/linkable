import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

const sidebarLinks = [
  { name: 'Ideator Hub', href: '/ideator', active: false },
  { name: 'Matcher Projects', href: '/matcher', active: false },
  { name: 'Challenger Arena', href: '/challenger', active: true },
  { name: 'Cohort Chat', href: '/chat', active: false },
  { name: 'Support & FAQ', href: '/support', active: false },
];

const filterTabs = ['All Stacks', 'Distributed Systems', 'ML/Streaming'];

const challenges = [
  {
    company: 'Swvl Egypt',
    title: 'Swvl Dynamic Fleet Routing Optimization',
    daysLeft: '4 Days Left',
    domain: 'Algorithms & Graph Optimization',
    stack: ['Python', 'Go'],
    participants: 128,
    reward: '15,000 EGP + 500 XP',
    track: 'Interview Fast-Track',
    accent: 'bg-emerald-50 border-emerald-200',
  },
  {
    company: 'Fawry',
    title: 'Fawry Real-Time Fraud Anomaly Detection',
    daysLeft: '10 Days Left',
    domain: 'Machine Learning & Streaming',
    stack: ['Apache Flink', 'Kafka'],
    participants: 89,
    reward: '20,000 EGP + 650 XP',
    track: 'FinTech Lead Fast-Track',
    accent: 'bg-amber-50 border-amber-200',
  },
  {
    company: 'Instabug',
    title: 'Instabug Crash Log Semantic Clustering',
    daysLeft: '14 Days Left',
    domain: 'NLP & System Design',
    stack: ['Rust', 'Python', 'Vector DB'],
    participants: 64,
    reward: '12,000 EGP + 400 XP',
    track: 'Core Eng Direct Review',
    accent: 'bg-sky-50 border-sky-200',
  },
];

const telemetryMetrics = [
  { label: 'Memory Bound', value: '68%', status: 'critical' },
  { label: 'Latency SLA', value: '42ms', status: 'healthy' },
  { label: 'Throughput', value: '12.4k/s', status: 'healthy' },
  { label: 'Error Rate', value: '0.03%', status: 'healthy' },
];

const badges = [
  { name: 'Bug Hunter', icon: '🐛', description: 'Identified 10+ production bugs', earned: true },
  { name: 'Scalability Architect', icon: '🏗️', description: 'Built systems handling 100k+ RPS', earned: true },
  { name: 'Speed Demon', icon: '⚡', description: 'Completed 3 sprints under deadline', earned: false },
  { name: 'Fawry Fellow', icon: '🏦', description: 'Top performer in Fawry challenges', earned: false },
];

const leaderboard = [
  { rank: 1, name: 'Youssef M.', xp: '4,280', bounties: 12, badge: '🥇' },
  { rank: 2, name: 'Fatma A.', xp: '3,920', bounties: 10, badge: '🥈' },
  { rank: 3, name: 'Omar K.', xp: '3,650', bounties: 9, badge: '🥉' },
];

export default function ChallengerPage() {
  return (
    <div className='min-h-screen bg-alabaster'>
      <Navbar />

      <div className='flex'>
        {/* Main Content */}
        <main className='flex-1 min-w-0'>
          {/* Top Bar */}
          <div className='sticky top-16 z-30 bg-alabaster/80 backdrop-blur-md border-b border-primary-deep/10 px-6 py-3 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 rounded-sm bg-primary-deep flex items-center justify-center text-butter text-xs font-display'>
                EG
              </div>
              <div>
                <p className='text-sm font-medium text-primary-deep'>Egyptian Developer Workstation</p>
                <p className='text-xs text-primary-deep/60'>Cairo, Egypt · UTC+2</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Badge variant='outline'>Challenger Tier</Badge>
              <div className='w-9 h-9 rounded-full bg-accent-copper text-butter flex items-center justify-center text-sm font-display'>
                AH
              </div>
            </div>
          </div>

          <div className='p-6 lg:p-10 max-w-7xl mx-auto space-y-10'>
            {/* Hero Section */}
            <section>
              <div className='flex flex-col lg:flex-row gap-8 items-start'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-4'>
                    <Badge variant='success'>ARENA SPRINT #14 LIVE</Badge>
                    <Badge variant='outline'>CAI-PROD-2025.04</Badge>
                  </div>
                  <h1 className='font-display text-4xl lg:text-5xl text-primary-deep mb-4'>
                    Challenger Arena: Solve Real Egyptian Company Bounties
                  </h1>
                  <p className='text-lg text-primary-deep/70 leading-relaxed'>
                    Local tech giants post real production problems. Compete head-to-head with
                    Egypt&apos;s top engineering talent to solve them. Earn bounties, gain
                    credibility, and fast-track your career into elite Egyptian tech companies.
                  </p>
                </div>

                {/* Credibility Factor Card */}
                <Card className='w-full lg:w-80 p-6 bg-primary-deep! text-butter border-0 shrink-0'>
                  <p className='label-uppercase text-butter/60 mb-4'>Your Credibility Factor</p>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-butter/80'>Level</span>
                      <span className='font-display text-3xl text-butter'>3</span>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-butter/80'>XP</span>
                        <span className='font-display text-butter'>1,240</span>
                      </div>
                      <div className='h-2 bg-butter/10 rounded-full overflow-hidden'>
                        <div className='h-full bg-primary rounded-full' style={{ width: '62%' }} />
                      </div>
                    </div>
                    <div className='flex items-center justify-between pt-2 border-t border-butter/10'>
                      <span className='text-butter/80'>Egypt Standing</span>
                      <span className='font-display text-butter'>#42</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-butter/80'>Bounties Completed</span>
                      <span className='font-display text-butter'>6</span>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Active Engineering Directives */}
            <section>
              <h2 className='font-display text-2xl text-primary-deep mb-2'>Active Engineering Directives</h2>
              <p className='label-uppercase text-primary-deep/60 mb-4'>Live bounties from Egyptian tech leaders</p>

              {/* Filter Tabs */}
              <div className='flex gap-2 mb-6'>
                {filterTabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-sm text-sm font-medium transition-all border ${
                      i === 0
                        ? 'bg-primary-deep text-butter border-primary-deep'
                        : 'bg-alabaster text-primary-deep border-primary-deep/20 hover:border-primary-deep/40'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Challenge Cards */}
              <div className='grid grid-cols-1 gap-6'>
                {challenges.map((challenge) => (
                  <Card
                    key={challenge.title}
                    className={`p-6 border ${challenge.accent} hover:shadow-lg transition-shadow`}
                  >
                    <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Badge variant='primary'>{challenge.company}</Badge>
                          <span className='text-xs text-primary-deep/60 font-medium'>{challenge.daysLeft}</span>
                        </div>
                        <h3 className='font-display text-xl text-primary-deep mb-2'>
                          {challenge.title}
                        </h3>
                        <div className='flex flex-wrap items-center gap-3 text-sm text-primary-deep/70 mb-3'>
                          <span>Domain: {challenge.domain}</span>
                          <span className='text-primary-deep/30'>·</span>
                          <span>Stack: {challenge.stack.join('/')}</span>
                          <span className='text-primary-deep/30'>·</span>
                          <span>{challenge.participants} Active Cohort Participants</span>
                        </div>
                        <div className='flex items-center gap-4'>
                          <span className='font-display text-lg text-primary-deep'>
                            Total Reward: {challenge.reward}
                          </span>
                          <Badge variant='success'>{challenge.track}</Badge>
                        </div>
                      </div>
                      <div className='shrink-0'>
                        <Button variant='primary'>Accept Challenge</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Telemetry Diagnostics */}
            <section>
              <h2 className='font-display text-2xl text-primary-deep mb-2'>Telemetry Diagnostics</h2>
              <p className='label-uppercase text-primary-deep/60 mb-4'>Evaluation Matrix</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {telemetryMetrics.map((metric) => (
                  <Card key={metric.label} className='p-5 bg-alabaster border border-primary-deep/10'>
                    <p className='label-uppercase text-primary-deep/60 mb-2'>{metric.label}</p>
                    <div className='flex items-center gap-2'>
                      <span className='font-display text-3xl text-primary-deep'>{metric.value}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          metric.status === 'critical' ? 'bg-red-500' : 'bg-emerald-500'
                        }`}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Badges & Engineering Honors */}
            <section>
              <h2 className='font-display text-2xl text-primary-deep mb-2'>Badges & Engineering Honors</h2>
              <p className='label-uppercase text-primary-deep/60 mb-4'>Recognition for exceptional performance</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {badges.map((badge) => (
                  <Card
                    key={badge.name}
                    className={`p-5 text-center border transition-all ${
                      badge.earned
                        ? 'bg-alabaster border-primary-deep/10 hover:shadow-md'
                        : 'bg-alabaster border-primary-deep/5 opacity-50'
                    }`}
                  >
                    <span className='text-3xl mb-3 block'>{badge.icon}</span>
                    <p className='font-display text-primary-deep text-sm mb-1'>{badge.name}</p>
                    <p className='text-xs text-primary-deep/60 leading-relaxed'>{badge.description}</p>
                    {badge.earned ? (
                      <Badge variant='success' className='mt-3'>Earned</Badge>
                    ) : (
                      <Badge variant='outline' className='mt-3'>Locked</Badge>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* National Egyptian Leaderboard */}
            <section>
              <h2 className='font-display text-2xl text-primary-deep mb-2'>National Egyptian Leaderboard</h2>
              <p className='label-uppercase text-primary-deep/60 mb-4'>Top-ranked developers across all arenas</p>
              <Card className='bg-primary-deep! text-butter border-0 overflow-hidden'>
                {/* Top 3 Podium */}
                <div className='p-8'>
                  <div className='grid grid-cols-3 gap-6 mb-8'>
                    {leaderboard.map((entry) => (
                      <div
                        key={entry.rank}
                        className='text-center p-4 rounded-md border border-butter/10 bg-butter/5'
                      >
                        <span className='text-2xl mb-2 block'>{entry.badge}</span>
                        <p className='font-display text-lg text-butter mb-1'>{entry.name}</p>
                        <p className='text-butter/60 text-xs mb-2'>Rank #{entry.rank}</p>
                        <p className='font-display text-butter text-sm'>{entry.xp} XP</p>
                        <p className='text-butter/50 text-xs'>{entry.bounties} bounties</p>
                      </div>
                    ))}
                  </div>

                  {/* Full Leaderboard Table */}
                  <div className='border-t border-butter/10 pt-6'>
                    <table className='w-full text-left'>
                      <thead>
                        <tr className='border-b border-butter/10'>
                          <th className='pb-3 text-butter/60 text-xs font-medium label-uppercase'>Rank</th>
                          <th className='pb-3 text-butter/60 text-xs font-medium label-uppercase'>Developer</th>
                          <th className='pb-3 text-butter/60 text-xs font-medium label-uppercase text-right'>XP</th>
                          <th className='pb-3 text-butter/60 text-xs font-medium label-uppercase text-right'>Bounties</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((entry) => (
                          <tr key={entry.rank} className='border-b border-butter/5'>
                            <td className='py-3 font-display text-butter'>
                              <span className='mr-2'>{entry.badge}</span>
                              #{entry.rank}
                            </td>
                            <td className='py-3 text-butter/80'>{entry.name}</td>
                            <td className='py-3 text-butter/80 text-right font-display'>{entry.xp}</td>
                            <td className='py-3 pr-3 text-butter/80 text-right'>{entry.bounties}</td>
                          </tr>
                        ))}
                        {/* User's rank */}
                        <tr className='bg-butter/10'>
                          <td className='py-3 font-display text-accent-copper'>#42</td>
                          <td className='py-3 text-butter font-medium'>You (AH)</td>
                          <td className='py-3 text-butter font-display text-right'>1,240</td>
                          <td className='py-3 pr-3 text-butter text-right'>6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
