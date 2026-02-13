const stats = [
    { number: '6%+', label: 'Reply Rate' },
    { number: '100K+', label: 'Leads Per Month Capacity' },
    { number: '30%', label: 'Revenue Increase' },
    { number: '$0.50', label: 'Per Quality Lead' },
];

export default function Stats() {
    return (
        <section className="py-12 md:py-20 border-b-2 border-[#1E293B]/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#E0F2FE]/30 border-2 border-[#1E293B] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-center btn-shadow">
                        <span className="text-2xl sm:text-3xl md:text-[52px] font-black text-[#1E293B] block mb-1 sm:mb-2 leading-none tracking-tighter">{stat.number}</span>
                        <span className="text-[10px] sm:text-xs text-[#475569] font-black uppercase tracking-widest leading-tight block">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
