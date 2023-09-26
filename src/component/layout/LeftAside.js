import Link from 'next/link';
import React from 'react'

export default function LeftAside() {
  return (
    <div className="col-lg-3 col-md-12">
      <aside>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              className="nav-link active bg-info text-white"
              aria-current="page"
              href="flight"
            >
              The Flight
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link bg-info text-white" href="city">
              The City
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link bg-info text-white" href="island">
              The Island
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link bg-info text-white" href="food">
              The Food
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
